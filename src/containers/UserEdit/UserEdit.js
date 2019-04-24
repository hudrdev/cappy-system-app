import React, { Component } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import EditPositions from '../../components/EditPositions/EditPositions';

class UserEdit extends Component {
    state = {
        name: 'testname',
        surname: 'testsurname',
        birth: '01/01/2000',
        address: 'Some address 123',
        phone: '123456789',
        box: true,
        cat: false,
        floor: true
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
            <div className="UserEdit">
                <h2>změnit uživatelská data</h2>
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
                    <Button 
                        text='uložit' />
                </form>
            </div>
        )
    }
}

export default UserEdit;