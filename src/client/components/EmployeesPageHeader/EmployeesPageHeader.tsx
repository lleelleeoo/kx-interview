import React, { FC } from "react";
import { Button } from "../Button/Button";

import styles from './EmployeesPageHeader.module.css';
import clsx from "clsx";
import { Employee } from "../../../types/apiV1";
import { createEmployee } from "../../endpoints/endpoints";

const statuses: Record<Employee['status'], string> = {
    working: 'Working',
    onVacation: 'On vacation',
    businessTrip: 'Business trip',
    lunchTime: 'Lunch time'
};

type EmployeesPageHeaderProps = {
    className?: string;
    onChangeSearchValue?: (value: string) => void;
    onChangeStatusValue?: (value: Employee['status'] | '') => void;
    onEmployeeCreated?: (employee: Employee) => void;
};

export const EmployeesPageHeader: FC<EmployeesPageHeaderProps> = ({ className, onChangeSearchValue, onChangeStatusValue, onEmployeeCreated }) => {
    const handleCreateEmployee = async () => {
        const name = prompt('Enter employee name');
        if (name) {
            const { employee } = await createEmployee({ name, status: 'working', img: `/static/example${Math.floor(Math.random() * 10)}.png`});
            onEmployeeCreated?.(employee);
        }
    }

    return (
        <div className={clsx(className, styles.wrapper)}>
            <Button view="action" size="l" onClick={handleCreateEmployee} >Create +</Button>
            <div className={styles['search-wrapper']}>
                <input type="text" className={styles['search-input']} placeholder="Type to search" onChange={({ target }) => onChangeSearchValue?.(target.value)} />
                <select onChange={({ target }) => onChangeStatusValue?.(target.value as Employee['status'] | '')}>
                    <option value="">All</option>
                    <option value="working">{statuses.working}</option>
                    <option value="onVacation">{statuses.onVacation}</option>
                    <option value="businessTrip">{statuses.businessTrip}</option>
                    <option value="launchTime">{statuses.lunchTime}</option>
                </select>
            </div>
        </div>
    )
}
