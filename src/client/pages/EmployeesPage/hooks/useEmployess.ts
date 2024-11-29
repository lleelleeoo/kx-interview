import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { Employee } from "../../../../types/apiV1";
import { getEmployees } from "../../../endpoints/endpoints";

export const useEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
    const [searchString, setSearchString] = useState<string>('');

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
        const filtered = employees.filter((e) => e.name.toLowerCase().includes(searchString.toLowerCase().trim()));
        setFilteredEmployees(filtered);
    }, 300), [employees, searchString]);

    return { employees: filteredEmployees, setSearchString };
}
