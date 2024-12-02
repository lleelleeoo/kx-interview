import React from "react";
import { Button } from "../Button/Button";

import styles from './PageHeader.module.css';

export const PageHeader: React.FC = () => 
<header data-testid="page-header" className={styles.header}>
    <div className={styles.wrapper}>
        <div className={styles.logo} data-testid="page-header-logo">Employees</div>
        <Button data-testid="page-header-logout">Log Out</Button>
    </div>
</header>;
