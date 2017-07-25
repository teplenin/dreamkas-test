import React from 'react'
import { DropDownMenu, MenuItem } from 'material-ui';

const RoomsFilter = (props) => {
    const onChange = (event, index, value) => {
        props.onChange(value);
    }

    return (
        <div>
            <DropDownMenu value={props.value} onChange={onChange}>
                <MenuItem value='all' primaryText='Все' />
                <MenuItem value='free' primaryText='Только свободные' />
                <MenuItem value='booked' primaryText='Только забронированные' />
            </DropDownMenu>
        </div>
    )
}

RoomsFilter.defaultProps = {
    onChange: () => {}
}

export default RoomsFilter;
