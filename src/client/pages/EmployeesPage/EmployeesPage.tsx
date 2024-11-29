import React from "react"
import { PageHeader } from "../../components/PageHeader/PageHeader"
import { EmployeesPageHeader } from "../../components/EmployeesPageHeader/EmployeesPageHeader"

import styles from './EmployeesPage.module.css';
import { EmployeesCard } from "../../components/EmployeesCard/EmployeesCard";

export const EmployeesPage: React.FC = () =>
<>
    <PageHeader />
    <section className={styles.section}>
        <EmployeesPageHeader className={styles['employees-page-header']}/>
        <div className={styles['employees-list']}>
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
        </div>
    </section>
</>
