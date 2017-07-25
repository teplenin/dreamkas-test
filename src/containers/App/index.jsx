import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RoomsListContainer, RoomsItemContainer } from '../Rooms';

import * as roomsActions from 'actions/rooms';

import 'normalize.css';
import './static/styles.css';

class App extends Component {
    componentDidMount() {
        const { fetchRoomsList } = this.props.roomsActions;

        fetchRoomsList();
    }

    render() {
        return (
            <div className='app'>
                <div className='app__container'>
                    <main className='app__content'>
                        <Switch>
                            <Route exact path='/' component={RoomsListContainer} />
                            <Route path='/:room_id(\d+)' component={RoomsItemContainer} />
                        </Switch>
                    </main>
                </div>
                <footer className='app__footer'>
                    copyright 2016
                </footer>
            </div>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        roomsActions: bindActionCreators(roomsActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
