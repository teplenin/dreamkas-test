import React from 'react';
import { Link } from 'react-router-dom';

const RoomsItem = ({ roomProps }) => {
    return (
        <div>
            <div>
                <Link to='/'>Назад</Link>
            </div>
            Комната {roomProps.number}
        </div>
    )
}

export default RoomsItem;
