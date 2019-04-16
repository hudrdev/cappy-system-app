import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import Admin from './containers/Admin/Admin';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <Route exact path='/' component={Auth} />
                    <Route path='/admin' component={Admin} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
