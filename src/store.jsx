import { createStore, compose } from 'redux';
import rootReducer from './reducers/index'
import { initialModalState } from './reducers/modals'
import jobs from './data/jobs'

// set default states for store
const defaultState = {
    modals: initialModalState,
    jobs
};

// create store to hold state tree for app
const store = createStore(
    rootReducer, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export page for use
export default store;