import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { RoomsList, RoomsFilter } from 'components/Rooms';

import { getRooms } from 'selectors/rooms';

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
            <div>
                <RoomsFilter onChange={this.onChangeFilter} />
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
