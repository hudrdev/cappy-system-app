import React, { Component } from 'react';

import UserListItem from '../../components/UserListItem/UserListItem';

class UserList extends Component {
    state = {
        users: [
            {
                name: 'Vitalii',
                surname: 'Hudanets',
                birth: '09/12/1992',
                address: 'Weilova 1144/2',
                phone: '773873248',
                box: false,
                cat: false,
                floor: true
            },
            {
                name: 'Mariia',
                surname: 'Shapirko',
                birth: '02/03/1995',
                address: 'Weilova 1144/2',
                phone: '605133783',
                box: true,
                cat: true,
                floor: true
            },
            {
                name: 'Natalie',
                surname: 'Chepeleva',
                birth: '18/07/1994',
                address: 'Svatoplukova 15',
                phone: '775123169',
                box: true,
                cat: true,
                floor: true
            },{
                name: 'Philipp',
                surname: 'Malov',
                birth: '10/06/1998',
                address: 'Voobwe hz gde 123',
                phone: '777237169',
                box: true,
                cat: true,
                floor: true
            },
            {
                name: 'Anastasiia',
                surname: 'Krasnoslobodceva',
                birth: '09/12/1992',
                address: 'Weilova 1144/2',
                phone: '773873248',
                box: true,
                cat: true,
                floor: true
            }
        ]
    }

    render() {
        return(
            <div className="UserList">
                <h2>seznam uživatelů</h2>
                <div className="UserList__Users">
                    {
                        this.state.users.map(user => {
                            return (
                                <UserListItem
                                    user={user}
                                    key={user.surname} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserList;