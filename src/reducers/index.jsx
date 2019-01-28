import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import modals from './modals';
import jobs from './jobs';

const showUploadSnackbar = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_SNACKBAR':
            return true;
        case 'HIDE_SNACKBAR':
            return false;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    modals,
    jobs,
    showUploadSnackbar,
    routing
});

export default rootReducer;
