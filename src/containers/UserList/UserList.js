import React, { Component } from 'react';

class UserList extends Component {
    render() {
        const user = (
            <div className='User'>
                <p className="User__name">testname</p>
                <div className="User__positions">
                    <div>box</div>
                    <div>cat</div>
                    <div>floor</div>
                </div>
            </div>
        )

        return(
            <div className="UserList">
                <h2>seznam uživatelů</h2>
                <div className="UserList__Users">
                    {user}
                    {user}
                    {user}
                    {user}
                    {user}
                </div>
            </div>
        )
    }
}

export default UserList;