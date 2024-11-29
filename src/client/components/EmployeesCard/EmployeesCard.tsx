import React from "react";

import styles from './EmployeesCard.module.css';

export const EmployeesCard: React.FC = () => 
<div className={styles.card}>
    <div className={styles.picture} />
    <div className={styles.name}>Johana Levi</div>
    {/* Status. May be decoupled at standalone component */}
    <div className={styles['status-wrapper']}>
        <span className={styles.status} >Working</span>   
        <select className={styles.select}>
            <option className={styles.option} value="working">Working</option>
            <option className={styles.option} value="onVacation">On vacation</option>
            <option className={styles.option} value="businessTrip">Business trip</option>
            <option className={styles.option} value="lunchTime">Lunch time</option>
        </select>
    </div>
</div>
