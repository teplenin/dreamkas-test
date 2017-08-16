import { createSelector } from 'reselect';

const getItemsID = (state) => state.roomsList.get('ids');
const getItemsList = (state) => state.roomsList.get('data');
const getItemsStatus = (state) => state.roomsList.get('status');

const getRoomID = (state, props) => props.roomID;

export const getRoomsID = createSelector(
    [ getItemsID ],
    (itemsID) => itemsID.toArray()
);

export const getRooms = createSelector(
    [ getItemsList ],
    (itemsList) => itemsList.toArray()
)

export const getRoom = createSelector(
    [ getItemsID, getItemsList, getRoomID ],
    (itemsID, itemsList, roomID) => {
        const IDx = itemsID.indexOf(String(roomID));

        return IDx >= 0 ? itemsList.get(IDx).toObject() : {}
    }
)

export const getRoomsStatus = createSelector(
    [ getItemsStatus ],
    (status) => status
)
