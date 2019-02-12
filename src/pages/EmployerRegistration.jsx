import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import '../styles/app.scss';
import RegistrationForm from "../components/RegistrationForm";
import { withRouter, push } from 'react-router-dom';


class EmployerRegistration extends React.Component {
    render() {
        return (
            <div>
                <LoginNavbar/>
                <RegistrationForm/>
            </div>
        );
    }
}

export default withRouter (EmployerRegistration);
