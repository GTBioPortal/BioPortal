import React from 'react';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/app.scss';
import RegistrationForm from "../components/RegistrationForm";

class EmployerRegistration extends React.Component {
    render() {
        return (
            <div>
                <EmployerNavbar msgCount={0} notificationCount={0}/>

                <RegistrationForm/>
            </div>
        );
    }
}

export default EmployerRegistration;