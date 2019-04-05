import React, { Component } from 'react';

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
                <p className="Header__menu-element">hlavní stranka</p>
                <p className="Header__menu-element">vytvořit uživatele</p>
                <p className="Header__menu-element">menu element</p>
                <p className="Header__menu-element">menu element</p>
                <p className="Header__menu-element">menu element</p>
                <p className="Header__menu-element">menu element</p>
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