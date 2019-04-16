/* Homepage for BioPortal */

import React from 'react'
import ReactDOM from 'react-dom'
import ViewJobPage from './pages/ViewJobPage'
import MainHomepage from './pages/MainHomepage'
import EmployerLoginpage from './pages/EmployerLoginpage'
import EmployerHomepage from './pages/EmployerHomepage'
import EmployerRegistration from './pages/EmployerRegistration'
import ApplyToJobPage from './pages/ApplyToJobPage'
import EditEmployerJobForm from './pages/EditEmployerJobForm'
import EmployerJobForm from './pages/EmployerJobForm'
import StudentRegistration from './pages/StudentRegistration'
import StudentLoginpage from './pages/StudentLoginpage'
import ViewApplicantsPage from './pages/ViewApplicantsPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import StudentHomepage from "./pages/StudentHomepage";
import EmpolyerProfilePage from "./pages/EmployerProfilePage";
import StudentProfilePage from "./pages/StudentProfilePage";


/* Router: Determines path to component correspondence */
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
                <Route path='/employer' component={EmployerHomepage}>
                </Route>
                <Route path='/employerLogin' component={EmployerLoginpage}>
                </Route>
                <Route path='/registerEmployer' component={EmployerRegistration}>
                </Route>
                <Route path='/editJobForm' component={EditEmployerJobForm}>
                </Route>
                <Route path='/employerJobForm' component={EmployerJobForm}>
                </Route>
                <Route path='/registerStudent' component={StudentRegistration}>
                </Route>
                <Route path='/studentLogin' component={StudentLoginpage}>
                </Route>
                <Route path='/apply' component={ApplyToJobPage}>
                </Route>
                <Route path='/viewApplicants' component={ViewApplicantsPage}>
                </Route>
                <Route path='/employerProfile' component={EmpolyerProfilePage}>
                </Route>
                <Route path='/studentProfile' component={StudentProfilePage}>
                </Route>
            </div>
        </Router>
    </Provider>
);

/* renders router */
ReactDOM.render(
    router,
    document.getElementById('app')
);
