import React from 'react';
import PropTypes from 'prop-types';

import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';

const RoomsList = ({ roomsList, ...props }, { router }) => {
    const handleSelectRow = (key) => {
        const room = roomsList[key] || {};

        if(room.id) {
            router.history.push(`/${room.id}`);
        }
    }

    return (
        <div className='roomslist'>
            <Table selectable={false} onCellClick={handleSelectRow}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Номер комнаты</TableHeaderColumn>
                        <TableHeaderColumn>Имя</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover>
                    {roomsList.map(room => (
                        <TableRow key={room.id}>
                            <TableRowColumn>{room.number}</TableRowColumn>
                            <TableRowColumn>{room.name || '—'}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

RoomsList.contextTypes = {
    router: PropTypes.object.isRequired
}

export default RoomsList
