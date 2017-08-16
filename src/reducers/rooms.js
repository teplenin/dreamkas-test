import { fromJS, List, Map } from 'immutable';

import {
    FETCH_ROOMS_LIST_REQUEST, FETCH_ROOMS_LIST_SUCCESS,
    FETCH_ROOMS_LIST_FAILURE, UPDATE_ROOMS_ITEM_NAME
} from 'constants/actions';

const initialState = fromJS({
    ids: [],
    data: [],
    status: ''
});

export default (state = initialState, { type, payload, ...props }) => {
    switch (type) {
        case FETCH_ROOMS_LIST_REQUEST:
            return state.set('status', 'fetching');

        case FETCH_ROOMS_LIST_SUCCESS: {
            const ids = payload.map(item => String(item.id));
            const data = payload.map(item => Map(item));

            return state.set('ids', List(ids))
                        .set('data', List(data))
                        .set('status', 'complete');
        }
        case FETCH_ROOMS_LIST_FAILURE:
            return state.set('status', 'error');

        case UPDATE_ROOMS_ITEM_NAME: {
            const IDx = state.get('ids').indexOf(String(props.roomID));

            return state.setIn(['data', IDx, 'name'], payload);
        }
        default:
            return state;
    }
}
