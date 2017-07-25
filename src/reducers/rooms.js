import { fromJS, List } from 'immutable';

import {
    FETCH_ROOMS_LIST_REQUEST, FETCH_ROOMS_LIST_SUCCESS,
    FETCH_ROOMS_LIST_FAILURE, UPDATE_ROOMS_ITEM_NAME
} from 'constants/actions';

const initialState = fromJS({
    items: [],
    fetching: false,
    fetchingError: ''
});

export default (state = initialState, { type, payload, ...props }) => {
    switch (type) {
        case FETCH_ROOMS_LIST_REQUEST:
            return state.set('fetching', true)
                        .set('error', '');

        case FETCH_ROOMS_LIST_SUCCESS:
            return state.set('items', List(payload))
                        .set('fetching', false)
                        .set('error', '');

        case FETCH_ROOMS_LIST_FAILURE:
            return state.set('fetching', false)
                        .set('error', payload.message);

        case UPDATE_ROOMS_ITEM_NAME:
            return state.update('items', items => items.map(item => {
                if(item.id === parseInt(props.roomID, 10)) {
                    return { ...item, name: payload }
                }

                return item;
            }));

        default:
            return state;
    }
}
