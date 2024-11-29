import React, { FC } from "react";
import { Button } from "../Button/Button";

import styles from './EmployeesPageHeader.module.css';
import clsx from "clsx";
import { Employee } from "../../../types/apiV1";
import { s } from "vite/dist/node/types.d-aGj9QkWt";

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
};

export const EmployeesPageHeader: FC<EmployeesPageHeaderProps> = ({ className, onChangeSearchValue, onChangeStatusValue }) =>
<div className={clsx(className, styles.wrapper)}>
    <Button view="action" size="l" >Create +</Button>
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
