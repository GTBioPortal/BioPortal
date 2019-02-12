import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import '../styles/app.scss';
import EmployerLogin from "../components/EmployerLogin";
import { withRouter, push } from 'react-router-dom';


class EmployerLoginpage extends React.Component {
    constructor(props) {
        super(props);
        this.studentHomepage = this.studentHomepage.bind(this);
    }

    studentHomepage() {
        const path = '/student/' + 'sampleStudent';
        this.props.history.push(path);
    }

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
