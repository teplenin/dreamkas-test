import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { RoomsList } from 'components/Rooms';

import { getRooms } from 'selectors/rooms';

class RoomsListContainer extends PureComponent {
    render() {
        return (
            <div>
                <RoomsList roomsList={this.props.roomsList} />
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
