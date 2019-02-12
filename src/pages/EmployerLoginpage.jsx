import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import '../styles/app.scss';
import EmployerLogin from "../components/EmployerLogin";
import { withRouter, push } from 'react-router-dom';


class EmployerLoginpage extends React.Component {

    render() {
        return (
            <div>
                <LoginNavbar/>
                <EmployerLogin/>
            </div>
        );
    }
}

export default withRouter(EmployerLoginpage);
