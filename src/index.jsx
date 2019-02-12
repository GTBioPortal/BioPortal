import React from 'react'
import ReactDOM from 'react-dom'
import ViewJobPage from './pages/ViewJobPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import StudentHomepage from "./pages/StudentHomepage";

const router = (
    <Provider store={store}>
        <Router>
        	<div>
            	<Route exact path='/' component={StudentHomepage}>
            	</Route>
            	<Route path='/job' component={ViewJobPage}>
            	</Route>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(
    router,
    document.getElementById('app')
);
