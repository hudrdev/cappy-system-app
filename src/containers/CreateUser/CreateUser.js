import React, { Component, Fragment } from 'react';

class CreateUser extends Component {
    state = {
        name: '',
        surname: '',
        birth: '',
        address: '',
        phone: '',
        box: false,
        cat: false,
        floor: false,
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handlePositionBox = () => {
        this.setState({
            box: !this.state.box
        })
    }

    handlePositionCat = () => {
        this.setState({
            cat: !this.state.cat
        })
    }

    handlePositionFloor = () => {
        this.setState({
            floor: !this.state.floor
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="CreateUser">
                <h2>vytvořit uživatele</h2>
                <form onSubmit={this.submitForm}>
                    {/* -----|-----|----- name -----|-----|----- */}
                    <div className='CreateUser__input-container'>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            value={this.state.name}
                            onChange={this.handleSubmit}
                            required />
                        {
                            this.state.name.length === 0 ?
                                <Fragment>
                                    <label
                                        htmlFor='name'>jméno</label>
                                </Fragment> :
                                <Fragment>
                                    <label
                                        style={{top: '-.5rem', fontSize: '1.2rem'}}
                                        htmlFor='name'>jméno</label>
                                </Fragment>
                        }
                        <span />
                    </div>
                    {/* -----|-----|----- name -----|-----|----- */}

                    {/* -----|-----|----- surname -----|-----|----- */}
                    <div className='CreateUser__input-container'>
                        <input
                            id='surname'
                            name='surname'
                            type='text'
                            value={this.state.surname}
                            onChange={this.handleSubmit}
                            required />
                        {
                            this.state.surname.length === 0 ?
                                <Fragment>
                                    <label
                                        htmlFor='surname'>příjmení</label>
                                </Fragment> :
                                <Fragment>
                                    <label
                                        style={{top: '-.5rem', fontSize: '1.2rem'}}
                                        htmlFor='surname'>příjmení</label>
                                </Fragment>
                        }
                        <span />
                    </div>
                    {/* -----|-----|----- surname -----|-----|----- */}
                    
                    {/* -----|-----|----- birth -----|-----|----- */}
                    <div className='CreateUser__input-container'>
                        <input
                            id='birth'
                            name='birth'
                            type='text'
                            value={this.state.birth}
                            onChange={this.handleSubmit}
                            required />
                        {
                            this.state.birth.length === 0 ?
                                <Fragment>
                                    <label
                                        htmlFor='birth'>datum narození</label>
                                </Fragment> :
                                <Fragment>
                                    <label
                                        style={{top: '-.5rem', fontSize: '1.2rem'}}
                                        htmlFor='birth'>datum narození</label>
                                </Fragment>
                        }
                        <span />
                    </div>
                    {/* -----|-----|----- birth -----|-----|----- */}

                    {/* -----|-----|----- address -----|-----|----- */}
                    <div className='CreateUser__input-container'>
                        <input
                            id='address'
                            name='address'
                            type='text'
                            value={this.state.address}
                            onChange={this.handleSubmit}
                            required />
                        {
                            this.state.address.length === 0 ?
                                <Fragment>
                                    <label
                                        htmlFor='address'>adresa</label>
                                </Fragment> :
                                <Fragment>
                                    <label
                                        style={{top: '-.5rem', fontSize: '1.2rem'}}
                                        htmlFor='address'>adresa</label>
                                </Fragment>
                        }
                        <span />
                    </div>
                    {/* -----|-----|----- address -----|-----|----- */}

                    {/* -----|-----|----- phone -----|-----|----- */}
                    <div className='CreateUser__input-container'>
                        <input
                            id='phone'
                            name='phone'
                            type='text'
                            value={this.state.phone}
                            onChange={this.handleSubmit}
                            required />
                        {
                            this.state.phone.length === 0 ?
                                <Fragment>
                                    <label
                                        htmlFor='phone'>telefonní číslo</label>
                                </Fragment> :
                                <Fragment>
                                    <label
                                        style={{top: '-.5rem', fontSize: '1.2rem'}}
                                        htmlFor='phone'>telefonní číslo</label>
                                </Fragment>
                        }
                        <span />
                    </div>
                    {/* -----|-----|----- phone -----|-----|----- */}

                    {/* -----|-----|----- position -----|-----|----- */}
                    <div className="CreateUser__position-container">
                        <div
                            onClick={this.handlePositionBox}
                            style={
                                this.state.box ? {opacity: 1} : null
                            }>
                            <p>box</p>
                        </div>
                        <div
                            onClick={this.handlePositionCat}
                            style={
                                this.state.cat ? {opacity: 1} : null
                            }>
                            <p>cat</p>
                        </div>
                        <div
                            onClick={this.handlePositionFloor}
                            style={
                                this.state.floor ? {opacity: 1} : null
                            }>
                            <p>floor</p>
                        </div>
                    </div>
                    {/* -----|-----|----- position -----|-----|----- */}

                    {/* -----|-----|----- email -----|-----|----- */}
                    <div className='CreateUser__input-container'>
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
                                        style={{top: '-.5rem', fontSize: '1.2rem'}}
                                        htmlFor='email'>email</label>
                                </Fragment>
                        }
                        <span />
                    </div>
                    {/* -----|-----|----- email -----|-----|----- */}

                    {/* -----|-----|----- password -----|-----|----- */}
                    <div className='CreateUser__input-container'>
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
                    {/* -----|-----|----- password -----|-----|----- */}
                    
                    <button>vytvořit</button>
                </form>
            </div>
        )
    }
}

export default CreateUser;