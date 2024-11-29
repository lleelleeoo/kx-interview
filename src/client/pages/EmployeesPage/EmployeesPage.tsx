import React from "react"
import { PageHeader } from "../../components/PageHeader/PageHeader"
import { EmployeesPageHeader } from "../../components/EmployeesPageHeader/EmployeesPageHeader"

import styles from './EmployeesPage.module.css';
import { EmployeesCard } from "../../components/EmployeesCard/EmployeesCard";
import { useEmployees } from "./hooks/useEmployess";

export const EmployeesPage: React.FC = () => {
    const { employees } = useEmployees();

    return (
        <>
            <PageHeader />
            <section className={styles.section}>
                <EmployeesPageHeader className={styles['employees-page-header']} />
                <div className={styles['employees-list']}>
                    {employees.map(({ id, name, img, status }) => (
                        <EmployeesCard key={id} id={id} name={name} img={img} status={status} />
                    ))}
                </div>
            </section>
        </>
    )
}
