import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = props => {
    return (
        <div className={styles.backdrop}>
            <Card className={styles.modal}>
                <header className={styles.title}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button className={styles.button} onClick={props.onClick}>Close</Button>
                </footer>
            </Card>
        </div>
    );
};

export default Modal;