import React from 'react';
import PropTypes from 'prop-types';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

import RoomsListItem from './listItem';

const RoomsList = ({ roomsList, ...props }, { router }) => {
    const handleSelectRow = (roomID) => {
        router.history.push(`/${roomID}`);
    }

    return (
        <div className='roomslist'>
            <Table selectable={false}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Номер комнаты</TableHeaderColumn>
                        <TableHeaderColumn>Имя</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover>
                    {roomsList.map(roomID => <RoomsListItem key={roomID} roomID={roomID} filter={props.filter} onClick={() => handleSelectRow(roomID)} />)}
                </TableBody>
            </Table>
        </div>
    )
}

RoomsList.contextTypes = {
    router: PropTypes.object.isRequired
}

export default RoomsList
