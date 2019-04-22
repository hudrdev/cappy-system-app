import React, { Component } from 'react';

class UserInfo extends Component {
    state = {
        name: 'Vitalii',
        surname: 'Hudanets',
        birth: '09/12/1992',
        address: 'Weilova 1144/2',
        phone: '773873248',
        email: 'wburn410@gmail.com',
        box: false,
        cat: false,
        floor: true,
        shifts: []
    }

    render() {
        return (
            <div className="UserInfo">
                userinfo component
            </div>
        )
    }
}

export default UserInfo;