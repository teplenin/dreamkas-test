import React from 'react';
import { connect } from 'react-redux';

import { TableRow, TableRowColumn } from 'material-ui/Table';

import { getRoom } from 'selectors/rooms';

const RoomsListItem = ({ room, ...props }) => {
    if(props.filter === 'free' && room.name) return false;
    if(props.filter === 'booked' && !room.name) return false;

    return (
        <TableRow onClick={props.onClick}>
            <TableRowColumn>{room.number}</TableRowColumn>
            <TableRowColumn>{room.name || '—'}</TableRowColumn>
        </TableRow>
    )
}

const mapStateToProps = (state, { roomID }) => {
    return {
        room: getRoom(state, { roomID })
    }
}

export default connect(mapStateToProps)(RoomsListItem);
