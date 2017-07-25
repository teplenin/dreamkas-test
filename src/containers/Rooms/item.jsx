import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { RoomsItem } from 'components/Rooms';

import { getRoom } from 'selectors/rooms';

class RoomsItemContainer extends PureComponent {
    render() {
        if(!this.props.roomProps) {
            return (
                <div>
                    Комната не найдена
                </div>
            )
        }

        return (
            <RoomsItem roomProps={this.props.roomProps} />
        )
    }
}

const mapStateToProps = (state, props) => {
    const roomID = props.match.params.room_id;

    return {
        roomProps: getRoom(state, { roomID })
    }
}

export default connect(mapStateToProps)(RoomsItemContainer);
