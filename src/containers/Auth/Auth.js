import React, { Component } from 'react';

class Auth extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
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
                    <div className='Auth__input'>
                        <label htmlFor='email'>email</label>
                        <input id='email' name='email' type='email' value={this.state.email} onChange={this.handleSubmit} />
                    </div>
                    <div className='Auth__input'>
                        <label htmlFor='password'>heslo</label>
                        <input id='password' name='password' type='password' value={this.state.password} onChange={this.handleSubmit} />
                    </div>
                    <button>log in</button>
                </form>
            </div>
        )
    }
}

export default Auth;