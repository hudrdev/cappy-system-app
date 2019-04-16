import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../components/Header/Header';
import CreateUser from '../CreateUser/CreateUser';
import UserList from '../UserList/UserList';
import UserEdit from '../UserEdit/UserEdit';

class Admin extends Component {
    render() {
        return (
            <div className="Admin">
                <Header />
                
                <Switch>
                    <Route path='/admin/createuser' component={CreateUser} />
                    <Route path='/admin/userlist' component={UserList} />
                    <Route path='/admin/useredit' component={UserEdit} />
                </Switch>
            </div>
        )
    }
}

export default Admin;