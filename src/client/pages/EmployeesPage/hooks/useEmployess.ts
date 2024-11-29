import { useEffect, useState } from "react";
import { Employee } from "../../../../types/apiV1";
import { getEmployees } from "../../../endpoints/endpoints";

export const useEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

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

    return { employees };
}
