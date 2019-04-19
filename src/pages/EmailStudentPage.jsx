import React from 'react';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/app.scss';
import EmailStudent from "../components/EmailStudent";


class EmailStudentPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                {/* Renders EmployerNavbar component */}
                <EmployerNavbar msgCount={0} notificationCount={0}/>

                {/* Renders JobPostingForm component */}
                <EmailStudent data={this.props.location.data.applicant}/>
            </div>
        );
    }
}

export default EmailStudentPage;