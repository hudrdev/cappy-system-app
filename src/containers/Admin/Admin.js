import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import CreateUser from '../CreateUser/CreateUser';

class Admin extends Component {
    render() {
        return (
            <div className="Admin">
                <Header />
                <CreateUser />
            </div>
        )
    }
}

export default Admin;