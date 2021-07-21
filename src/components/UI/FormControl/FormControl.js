import React from 'react';

import styles from './FormControl.module.css';

const FormControl = props => {

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        props.handleChange(name, value);
    }

    return (
        <div className={`${styles['form-control']} ${props.className || ''}`}>
            <label htmlFor={props.id}>{props.children}</label>
            <input
                type={props.type || 'text'}
                id={props.id || ''}
                name={props.name || ''}
                value={props.value || ''}
                onChange={onChangeHandler}
                required={props.required ?? false}
                autoFocus={props.autoFocus ?? false}
                autoComplete={props.autoComplete ?? "on"}
            />
        </div>
    );
}

export default FormControl;