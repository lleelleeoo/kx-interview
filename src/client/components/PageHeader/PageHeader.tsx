import React from "react";

import styles from './PageHeader.module.css';

export const PageHeader: React.FC = () => 
<header data-testid="page-header" className={styles.header}>
    <div className={styles.wrapper}>
        <div className={styles.logo} data-testid="page-header-logo">Employees</div>
        <button data-testid="page-header-logout">Logout</button>
    </div>
</header>;
