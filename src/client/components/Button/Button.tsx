import React from "react";
import { FC, PropsWithChildren } from "react";

import styles from './Button.module.css';
import clsx from "clsx";

type ButtonProps = {
    size?: 'm' | 'l';
    view?: 'default' | 'action';
    onClick?: () => void;
    className?: string
};

export const Button:FC<PropsWithChildren<ButtonProps>> = ({children, className, view='default', size='m', ...props}) => 
<button 
    className={clsx(
        styles.button, 
        className, 
        styles[`view-${view}`], 
        styles[`size-${size}`]
    )}
    {...props}
>{children}</button>
