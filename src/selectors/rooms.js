import { createSelector } from 'reselect';

const getItemsList = (state) => state.roomsList.get('items');
const getItemsFetchingError = (state) => state.roomsList.get('fetchingError');

const getRoomID = (state, props) => props.roomID;

export const getRooms = createSelector(
    [ getItemsList ],
    (itemsList) => itemsList.toArray()
)

export const getRoom = createSelector(
    [ getItemsList, getRoomID ],
    (itemsList, roomID) => itemsList.find(room => room.id === parseInt(roomID, 10))
)

export const getRoomsFetchingError = createSelector(
    [ getItemsFetchingError ],
    (fetchingError) => fetchingError
)
