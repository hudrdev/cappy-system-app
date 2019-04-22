import React from 'react';

function UserListItem(props) {
    return (
        <div className="UserListItem">
            <p className="UserListItem__name">{props.user.surname + ' ' + props.user.name[0] + '.'}</p>
            <div className="UserListItem__positions">
                <p style={props.user.box ? {opacity: 1} : null}>box</p>
                <p style={props.user.cat ? {opacity: 1} : null}>cat</p>
                <p style={props.user.floor ? {opacity: 1} : null}>floor</p>
            </div>
        </div>
    )
}

export default UserListItem;