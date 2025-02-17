import React, { FC } from "react";

import styles from './EmployeesCard.module.css';
import { Employee } from "../../../types/apiV1";

const statuses: Record<Employee['status'], string> = {
    working: 'Working',
    onVacation: 'On vacation',
    businessTrip: 'Business trip',
    lunchTime: 'Lunch time'
};

type EmployeesCardProps = Employee & {
    handleUpdateEmployeeStatus: ({ id, status }: Pick<Employee, 'id' | 'status'>) => void
}

export const EmployeesCard: FC<EmployeesCardProps> = ({ name, status, img, id, handleUpdateEmployeeStatus }) => 
<div className={styles.card}>
    <div className={styles.picture} style={{backgroundImage: `url(${img})`}}/>
    <div className={styles.name}>{name}</div>
    {/* Status. May be decoupled at standalone component */}
    <div className={styles['status-wrapper']}>
        <span className={styles.status} >{statuses[status]}</span>   
        <select className={styles.select} defaultValue={status} onChange={({ target }) => handleUpdateEmployeeStatus({ id, status: target.value as Employee['status'] })}>
            <option className={styles.option} value="working">{statuses.working}</option>
            <option className={styles.option} value="onVacation">{statuses.onVacation}</option>
            <option className={styles.option} value="businessTrip">{statuses.businessTrip}</option>
            <option className={styles.option} value="lunchTime">{statuses.lunchTime}</option>
        </select>
    </div>
</div>
