import React, { FC } from "react";
import { Button } from "../Button/Button";

import styles from './EmployeesPageHeader.module.css';
import clsx from "clsx";

type EmployeesPageHeaderProps = {
    className?: string;
    onChangeSearchValue?: (value: string) => void;
    onChangeStatusValue?: (value: string) => void;
};

export const EmployeesPageHeader: FC<EmployeesPageHeaderProps> = ({ className, onChangeSearchValue, onChangeStatusValue }) => 
<div className={clsx(className, styles.wrapper)}>
    <Button view="action" size="l" >Create +</Button>
    <div className={styles['search-wrapper']}>
        <input type="text" className={styles['search-input']} placeholder="Type to search" onChange={({ target }) => onChangeSearchValue?.(target.value)}/>
        <select value={'value'} />
    </div>
</div>
