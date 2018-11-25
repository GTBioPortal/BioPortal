import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import modals from './modals';

const rootReducer = combineReducers({
    modals,
    routing
});

export default rootReducer;
