import React, { Component } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class Auth extends Component {
    state = {
        email: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className='Auth'>
                <form onSubmit={this.submitForm}>
                    <Input
                        label='email'
                        value={this.state.email}
                        onChange={this.changeHandler} />
                    <Input
                        label='password'
                        value={this.state.password}
                        onChange={this.changeHandler} />
                    <Button
                        text='přihlásit se' />
                </form>
            </div>
        )
    }
}

export default Auth;