import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import roomsList from './rooms';

export default combineReducers({
    routing: routerReducer,

    roomsList
});
