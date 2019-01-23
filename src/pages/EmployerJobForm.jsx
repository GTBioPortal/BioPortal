import React from 'react';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/app.scss';
import JobPostingForm from "../components/JobPostingForm";

class EmployerJobForm extends React.Component {
    render() {
        return (
            <div>
                <EmployerNavbar msgCount={0} notificationCount={0}/>

                <JobPostingForm/>
            </div>
        );
    }
}

export default EmployerJobForm;