import React from 'react'
import ReactDOM from 'react-dom'
import StudentHomepage from './pages/StudentHomepage'
import ViewJobPage from './pages/ViewJobPage'
import MainHomepage from './pages/MainHomepage'
import EmployerLoginpage from './pages/EmployerLoginpage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = (
    <Provider store={store}>
        <Router>
        	<div>
            	<Route exact path='/' component={MainHomepage}>
            	</Route>
            	<Route path='/job' component={ViewJobPage}>
            	</Route>
                <Route path='/student' component={StudentHomepage}>
                </Route>
                <Route path='/employer' component={EmployerLoginpage}>
                </Route>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(
    router,
    document.getElementById('app')
);
