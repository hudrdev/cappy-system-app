import React, { Component } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import EditPositions from '../../components/EditPositions/EditPositions';

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

    changeHandler = (e) => {
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
                    <Input 
                        label='name'
                        value={this.state.name}
                        onChange={this.changeHandler} />
                    <Input 
                        label='surname'
                        value={this.state.surname}
                        onChange={this.changeHandler} />
                    <Input 
                        label='birth'
                        value={this.state.birth}
                        onChange={this.changeHandler} />
                    <Input 
                        label='address'
                        value={this.state.address}
                        onChange={this.changeHandler} />
                    <Input 
                        label='phone'
                        value={this.state.phone}
                        onChange={this.changeHandler} />
                    <EditPositions
                        handlePositionBox={this.handlePositionBox}
                        handlePositionCat={this.handlePositionCat}
                        handlePositionFloor={this.handlePositionFloor}
                        box={this.state.box}
                        cat={this.state.cat}
                        floor={this.state.floor} />
                    <Input 
                        label='email'
                        value={this.state.email}
                        onChange={this.changeHandler} />
                    <Input 
                        label='password'
                        value={this.state.password}
                        onChange={this.changeHandler} />
                    <Button 
                        text='vytvořit' />
                </form>
            </div>
        )
    }
}

export default CreateUser;