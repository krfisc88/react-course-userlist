import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import FormControl from '../UI/FormControl/FormControl';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';

import styles from './AddUser.module.css';

const AddUser = props => {
    const [userInput, setUserInput] = useState(
        {
            enteredName: '',
            enteredAge: 0
        }
    );

    const [error, setError] = useState();

    const onChangeHandler = (name, value) => {
        setUserInput(prevValues => {
            let newValues = {
                ...prevValues,
                [name]: value
            }
            return newValues;
        });
    };

    const addUserHandler = event => {
        event.preventDefault();

        if (userInput.enteredName.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name (no empty value)."
            });
            return;
        }
        if (userInput.enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            });
            return;
        }

        props.onAddUser(userInput);

        setUserInput({
            enteredName: '',
            enteredAge: 0
        });
        document.getElementById("entered-name").focus();
    };

    const formResetHandler = () => {
        setUserInput({
            enteredName: '',
            enteredAge: 0
        });
    };

    const errorResetHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <Modal
                    title={error.title}
                    message={error.message}
                    onClick={errorResetHandler}
                />}
            <Card>
                <form className={styles.form} onSubmit={addUserHandler}>
                    <FormControl
                        id="entered-name"
                        name="enteredName"
                        type="text"
                        value={userInput.enteredName}
                        handleChange={onChangeHandler}
                        autoComplete={"off"}
                        autoFocus={true}
                    >
                        Username
                    </FormControl>
                    <FormControl
                        id="entered-age"
                        name="enteredAge"
                        type="number"
                        value={userInput.enteredAge}
                        handleChange={onChangeHandler}
                        autoComplete={"off"}
                    >
                        Age
                    </FormControl>
                    <div className={styles.buttons}>
                        <Button className={styles.button} type="submit">Add New User</Button>
                        <Button className={styles.button} type="reset" onClick={formResetHandler}>Clear</Button>
                    </div>
                </form>
            </Card>
        </>
    );
}

export default AddUser;