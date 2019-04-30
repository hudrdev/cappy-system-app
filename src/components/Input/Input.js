import React from 'react';

function Input(props) {
    const config = {
        email: {
            label: 'email',
            type: 'email',
            name: 'email',
            length: '30'
        },
        password: {
            label: 'heslo',
            type: 'password',
            name: 'password',
            length: '16'
        },
        name: {
            label: 'jméno',
            type: 'text',
            name: 'name',
            length: '20'
        },
        surname: {
            label: 'příjmení',
            type: 'text',
            name: 'surname',
            length: '20'
        },
        birth: {
            label: 'narození',
            type: 'text',
            name: 'birth',
            length: '10'
        },
        address: {
            label: 'adresa',
            type: 'text',
            name: 'address',
            length: '40'
        },
        phone: {
            label: 'telefonní číslo',
            type: 'text',
            name: 'phone',
            length: '9'
        },
        start: {
            label: 'začátek',
            type: 'text',
            name: 'start',
            length: '5'
        },
        end: {
            label: 'konec',
            type: 'text',
            name: 'start',
            length: '5'
        }
    }
    return (
        <div className="Input">
            <input
                type={config[props.label].type}
                name={config[props.label].name}
                placeholder=' '
                onChange={props.onChange}
                value={props.value}
                autoComplete={'off'}
                maxLength={config[props.label].length}
                required />
            <label>{config[props.label].label}</label>
            <span />
        </div>
    )
}

export default Input;