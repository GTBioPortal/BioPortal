import { createStore, compose } from 'redux';
import rootReducer from './reducers/index'
import { initialModalState } from './reducers/modals'
import jobs from './data/jobs'


const defaultState = {
    modals: initialModalState,
    jobs
};

const store = createStore(
    rootReducer, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
