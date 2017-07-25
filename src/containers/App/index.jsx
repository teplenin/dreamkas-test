import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { RoomsListContainer } from '../Rooms';

import './static/styles.scss';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <main>
                    <Route exact path='/' component={RoomsListContainer} />
                </main>
            </div>
        )
    }
}

export default App;
