import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button
            type={props.type}
            id={props.id ?? ''}
            className={`${styles.button} ${props.type === "submit" ? styles['btn-submit']
            : props.type === "reset" ? styles['btn-reset']
            : ''} ${props.className ?? ''}`}
            onClick={props.onClick}
            >
            {props.children}
        </button>
    );
}

export default Button;