import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import './global.css';

const App = () => {
    const [users, setUsers] = useState([
        {
            id: 'default1',
            username: 'Greg',
            age: 25
        },
        {
            id: 'default2',
            username: 'Nancy',
            age: 54
        }
    ]);

    const handleAddUser = (newUser) => {

        setUsers(prevUsers => {
            let newUsers = [...prevUsers];
            newUsers.unshift({
                id: `${newUser.enteredName}_${new Date().getTime()}`,
                username: newUser.enteredName,
                age: newUser.enteredAge
            });
            return newUsers;
        });
    }

    return (
        <div className="app">
            <AddUser onAddUser={handleAddUser} />
            <UserList users={users}/>
        </div>
    );
}

export default App;