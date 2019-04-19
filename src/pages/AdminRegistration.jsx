import React from 'react';
import AdminLoginNavbar from '../components/AdminLoginNavbar';
import '../styles/app.scss';
import AdminRegistrationForm from "../components/AdminRegistrationForm";
import { withRouter, push } from 'react-router-dom';

/**
 * EmployerRegistration renders EmployerRegistrationForm component
 * includes EmployerNavbar
 */
class AdminRegistration extends React.Component {
    render() {
        return (
            <div>
                {/*insert navigation bar at the top of the page*/}
                <AdminLoginNavbar/>
                {/*insert form component into the page*/}
                <AdminRegistrationForm/>
            </div>
        );
    }
}

export default withRouter (AdminRegistration);
