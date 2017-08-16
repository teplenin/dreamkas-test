import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { RoomsList, RoomsFilter } from 'components/Rooms';

import { getRoomsID } from 'selectors/rooms';

import './static/styles/list.css';

class RoomsListContainer extends PureComponent {
    constructor() {
        super();

        this.state = {
            filter: 'all'
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.filter !== nextState.filter) {
            return true;
        }

        if(JSON.stringify(this.props.roomsList) !== JSON.stringify(nextProps.roomsList)) {
            return true;
        }

        return false;
    }

    onChangeFilter = (value) => {
        this.setState({
            filter: value
        })
    }

    render() {
        return (
            <div className='roomslistPage'>
                <div className='roomslistPage__header'>
                    <div className='roomslistPage__header-title'>Бронирование комнат</div>
                    <div className='roomslistPage__header-filter'>
                        <RoomsFilter value={this.state.filter} onChange={this.onChangeFilter} />
                    </div>
                </div>
                <RoomsList roomsList={this.props.roomsList} filter={this.state.filter} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        roomsList: getRoomsID(state)
    }
}

export default connect(mapStateToProps)(RoomsListContainer);
