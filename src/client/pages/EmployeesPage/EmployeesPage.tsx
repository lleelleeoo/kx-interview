import React, { useCallback } from "react"
import { PageHeader } from "../../components/PageHeader/PageHeader"
import { EmployeesPageHeader } from "../../components/EmployeesPageHeader/EmployeesPageHeader"

import styles from './EmployeesPage.module.css';
import { EmployeesCard } from "../../components/EmployeesCard/EmployeesCard";
import { useEmployees } from "./hooks/useEmployess";
import { Employee } from "../../../types/apiV1";
import { postEmployee } from "../../endpoints/endpoints";

export const EmployeesPage: React.FC = () => {
    const { employees, setSearchString, setFilterStatus, updateEmployee, createEmployee } = useEmployees();

    const handleUpdateEmployeeStatus = useCallback(async ({ id, status }: Pick<Employee, 'id' | 'status'>) => {
        const { employee } = await postEmployee({ id, status });

        updateEmployee({ id }, employee);
    }, [updateEmployee]);

    return (
        <>
            <PageHeader />
            <section className={styles.section}>
                <EmployeesPageHeader
                    className={styles['employees-page-header']}
                    onChangeSearchValue={setSearchString}
                    onChangeStatusValue={setFilterStatus}
                    onEmployeeCreated={createEmployee}
                />
                <div className={styles['employees-list']}>
                    {employees.map(({ id, name, img, status }) => (
                        <EmployeesCard key={id} id={id} name={name} img={img} status={status} handleUpdateEmployeeStatus={handleUpdateEmployeeStatus} />
                    ))}
                </div>
            </section>
        </>
    )
}
