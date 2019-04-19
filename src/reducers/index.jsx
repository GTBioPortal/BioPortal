import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import modals from './modals';
import jobs from './jobs';

// set reducer for snackbar
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

const showLoginFailedSnackbar = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_SNACKBAR':
            return true;
        case 'HIDE_SNACKBAR':
            return false;
        default:
            return state;
    }
}

// create single reducing function combining all reducers
const rootReducer = combineReducers({
    modals,
    jobs,
    showUploadSnackbar,
    showLoginFailedSnackbar,
    routing
});

// export reducer for use
export default rootReducer;
