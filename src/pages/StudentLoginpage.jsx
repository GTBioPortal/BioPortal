import React from 'react';
import StudentLoginNavbar from '../components/StudentLoginNavbar';
import '../styles/app.scss';
import StudentLogin from "../components/StudentLogin";
import { withRouter, push } from 'react-router-dom';


class StudentLoginpage extends React.Component {

    render() {
        return (
            <div>
                {/*creates login page with two components: navigation bar and the login interface*/}
                <StudentLoginNavbar/>
                <StudentLogin/>
            </div>
        );
    }
}

export default withRouter(StudentLoginpage);
