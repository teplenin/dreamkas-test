import { fromJS, List } from 'immutable';

import {
    FETCH_ROOMS_LIST_REQUEST, FETCH_ROOMS_LIST_SUCCESS,
    FETCH_ROOMS_LIST_FAILURE
} from 'constants/actions';

const initialState = fromJS({
    items: [],
    fetching: false,
    fetchingError: ''
});

export default (state = initialState, { type, payload }) => {
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

        default:
            return state;
    }
}
