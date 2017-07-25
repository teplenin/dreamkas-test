import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { RoomsList, RoomsFilter } from 'components/Rooms';

import { getRooms } from 'selectors/rooms';

import './static/styles/list.css';

class RoomsListContainer extends PureComponent {
    constructor() {
        super();

        this.state = {
            filter: 'all'
        }
    }

    onChangeFilter = (value) => {
        this.setState({
            filter: value
        })
    }

    render() {
        const roomsList = this.props.roomsList.filter(room => {
            switch(this.state.filter) {
                case 'free':
                    return !room.name;
                case 'booked':
                    return !!room.name;
                default:
                    return true;
            }
        })

        return (
            <div className='roomslistPage'>
                <div className='roomslistPage__header'>
                    <div className='roomslistPage__header-title'>Бронирование комнат</div>
                    <div className='roomslistPage__header-filter'>
                        <RoomsFilter value={this.state.filter} onChange={this.onChangeFilter} />
                    </div>
                </div>
                <RoomsList roomsList={roomsList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        roomsList: getRooms(state)
    }
}

export default connect(mapStateToProps)(RoomsListContainer);
