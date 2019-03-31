import React from 'react';
import StudentLoginNavbar from '../components/StudentLoginNavbar';
import '../styles/app.scss';
import StudentRegistrationForm from "../components/StudentRegistrationForm";
import { withRouter, push } from 'react-router-dom';


class StudentRegistration extends React.Component {
    render() {
        return (
            <div>
                //creates page with two components: navigation bar and the actual form
                <StudentLoginNavbar/>
                <StudentRegistrationForm/>
            </div>
        );
    }
}

export default withRouter (StudentRegistration);
