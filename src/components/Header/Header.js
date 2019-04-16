import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {
        burgerOpened: false
    }

    burgerHandler = () => {
        this.setState({
            burgerOpened: !this.state.burgerOpened
        })
    }

    render() {
        const menu = (
            <div className="Header__menu">
                <NavLink
                    to='/admin'
                    onClick={this.burgerHandler}
                    style={{textDecoration: 'none'}}>
                        <p className="Header__menu-element">hlavní stranka</p>
                </NavLink>
                <NavLink
                    to='/admin/createuser'
                    onClick={this.burgerHandler}
                    style={{textDecoration: 'none'}}>
                        <p className="Header__menu-element">vytvořit uživatele</p>
                </NavLink>
                <NavLink
                    to='/admin/userlist'
                    onClick={this.burgerHandler}
                    style={{textDecoration: 'none'}}>
                        <p className="Header__menu-element">seznam uživatelů</p>
                </NavLink>
            </div>
        )

        return (
            <div className="Header">
                <p className="Header__name">testname</p>
                <div
                    className={
                    this.state.burgerOpened ?
                        'Header__burger-close' :
                        'Header__burger-open'}
                    onClick={this.burgerHandler}>
                    <div />
                </div>
                {this.state.burgerOpened ? menu : null}
            </div>
        )
    }
}

export default Header;