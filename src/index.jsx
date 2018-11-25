import React from 'react'
import ReactDOM from 'react-dom'

import StudentHomepage from './pages/StudentHomepage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = (
    <Provider store={store}>
        <Router> 
            <Route path='/' component={StudentHomepage}>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
    router,
    document.getElementById('app')
);
