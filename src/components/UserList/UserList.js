import React from 'react';
import Card from '../UI/Card/Card';
import styles from './UserList.module.css';


const UserList = props => {

    return (
        <Card>
            <ul className={styles['list']}>
                {props.users.map((user, i) => {
                    return (
                        <li className={`${styles['user']} ${i === 0 && !user.id.includes('default') ? styles.appear : ''}`} 
                        key={user.id}>
                            {user.username} ({user.age} years old)
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
}

export default UserList;