import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RoomsItem } from 'components/Rooms';

import { getRoom } from 'selectors/rooms';
import * as roomsActions from 'actions/rooms';

class RoomsItemContainer extends PureComponent {
    handleUpdateName = (name) => {
        const { updateItemName } = this.props.roomsActions;

        updateItemName(this.props.roomID, name);
    }

    render() {
        if(!this.props.roomProps) {
            return (
                <div>
                    Комната не найдена
                </div>
            )
        }

        return (
            <RoomsItem roomProps={this.props.roomProps} updateName={this.handleUpdateName} />
        )
    }
}

const mapStateToProps = (state, props) => {
    const roomID = props.match.params.room_id;

    return {
        roomID,
        roomProps: getRoom(state, { roomID })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        roomsActions: bindActionCreators(roomsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsItemContainer);
