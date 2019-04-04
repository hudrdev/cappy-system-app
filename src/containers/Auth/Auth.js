import React, { Component, Fragment } from 'react';

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
                    <div>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            value={this.state.email}
                            onChange={this.handleSubmit}
                            required />
                        {
                            this.state.email.length === 0 ?
                                <Fragment>
                                    <label
                                        htmlFor='email'>email</label>
                                </Fragment> :
                                <Fragment>
                                    <label
                                        style={{top: '-.8rem', fontSize: '1.2rem'}}
                                        htmlFor='email'>email</label>
                                </Fragment>
                        }
                        <span />
                    </div>

                    <div>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleSubmit}
                            required />
                        {
                            this.state.password.length === 0 ?
                                <Fragment>
                                    <label
                                        htmlFor='password'>heslo</label>
                                </Fragment> :
                                <Fragment>
                                    <label
                                        style={{top: '-.5rem', fontSize: '1.2rem'}}
                                        htmlFor='password'>heslo</label>
                                </Fragment>
                        }
                        <span />
                    </div>
                    <button>přihlásit se</button>
                </form>
            </div>
        )
    }
}

export default Auth;