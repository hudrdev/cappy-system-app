import React from 'react';

function Input(props) {
    const config = {
        email: {
            label: 'email',
            type: 'email',
            name: 'email',
            id: 'email',
            length: '30'
        },
        password: {
            label: 'heslo',
            type: 'password',
            name: 'password',
            id: 'password',
            length: '16'
        },
        name: {
            label: 'jméno',
            type: 'text',
            name: 'name',
            id: 'name',
            length: '20'
        },
        surname: {
            label: 'příjmení',
            type: 'text',
            name: 'surname',
            id: 'surname',
            length: '20'
        },
        birth: {
            label: 'narození',
            type: 'text',
            name: 'birth',
            id: 'birth',
            length: '10'
        },
        address: {
            label: 'adresa',
            type: 'text',
            name: 'address',
            id: 'address',
            length: '40'
        },
        phone: {
            label: 'telefonní číslo',
            type: 'text',
            name: 'phone',
            id: 'phone',
            length: '9'
        }
    }
    return (
        <div className="Input">
            <input
                type={config[props.label].type}
                name={config[props.label].name}
                id={config[props.label].id}
                placeholder=' '
                onChange={props.onChange}
                value={props.value}
                autoComplete={'off'}
                maxLength={config[props.label].length}
                required />
            <label htmlFor={config[props.label].id}>{config[props.label].label}</label>
            <span />
        </div>
    )
}

export default Input;