import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import '../styles/app.scss';
import RegistrationForm from "../components/RegistrationForm";
import { withRouter, push } from 'react-router-dom';


class EmployerRegistration extends React.Component {
    render() {
        return (
            <div>
                //insert navigation bar at the top of the page
                <LoginNavbar/>
                //insert form component into the page
                <RegistrationForm/>
            </div>
        );
    }
}

export default withRouter (EmployerRegistration);
