import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import modals from './modals';
import jobs from './jobs';

const rootReducer = combineReducers({
    modals,
    jobs,
    routing
});

export default rootReducer;
