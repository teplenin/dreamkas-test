import React from 'react'

const RoomsFilter = (props) => {
    const onChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div>
            <select onChange={onChange}>
                <option value='all'>Все комнаты</option>
                <option value='free'>Только свободные комнаты</option>
                <option value='booked'>Только забронированные комнаты</option>
            </select>
        </div>
    )
}

RoomsFilter.defaultProps = {
    onChange: () => {}
}

export default RoomsFilter;
