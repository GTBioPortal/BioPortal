import React from 'react';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/app.scss';
import EmailStudent from "../components/EmailStudent";


class EmailStudentPage extends React.Component {
    render() {
        return (
            <div>
                {/* Renders EmployerNavbar component */}
                <EmployerNavbar msgCount={0} notificationCount={0}/>

                {/* Renders JobPostingForm component */}
                <EmailStudent/>
            </div>
        );
    }
}

export default EmailStudentPage;