import React, { Component } from 'react';

import Header from '../../components/Header/Header';
// import CreateUser from '../CreateUser/CreateUser';
import UserList from '../UserList/UserList';

class Admin extends Component {
    render() {
        return (
            <div className="Admin">
                <Header />
                <UserList />
            </div>
        )
    }
}

export default Admin;