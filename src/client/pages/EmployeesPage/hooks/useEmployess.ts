import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { Employee } from "../../../../types/apiV1";
import { getEmployees } from "../../../endpoints/endpoints";

export const useEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
    const [searchString, setSearchString] = useState<string>('');
    const [filterStatus, setFilterStatus] = useState<Employee['status'] | ''>('');

    const updateEmployee = (id: Pick<Employee, 'id'>, updates: Partial<Employee>) => {
        setEmployees((prev) => prev.map((employee) => employee.id === id.id ? { ...employee, ...updates } : employee));
    }

    const createEmployee = useCallback((newEmployee: Employee) => {
        setEmployees((prev) => {
            const existingEmployee = prev.find(({ id }) => id === newEmployee.id);
            if (existingEmployee) throw new Error('Employee already exists');

            return [...prev, { ...newEmployee }];
        });
    }, [setEmployees]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await getEmployees({}, { signal: controller.signal });
                setEmployees(response.employees);
            } catch (error) {
                setEmployees([]);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () =>  controller.abort();
    }, []);

    useEffect(debounce(() => {
        const filtered = employees.filter(({ name, status }) =>
            (filterStatus === '' || status === filterStatus) &&
            name.toLowerCase().includes(searchString.toLowerCase().trim())
    );
        setFilteredEmployees(filtered);
    }, 300), [employees, searchString, filterStatus]);

    return { employees: filteredEmployees, setSearchString, setFilterStatus, updateEmployee, createEmployee };
}
