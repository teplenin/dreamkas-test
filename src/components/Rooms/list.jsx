import React from 'react';
import { Link } from 'react-router-dom';

const RoomsList = ({ roomsList }) => {
    return (
        <div>
            {roomsList.map(room => (
                <div key={room.id}>
                    <Link to={`/${room.id}`}>Комната {room.number}</Link>
                </div>
            ))}
        </div>
    )
}

export default RoomsList
