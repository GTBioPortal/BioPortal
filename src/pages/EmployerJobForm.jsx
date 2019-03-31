import React from 'react';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/app.scss';
import JobPostingForm from "../components/JobPostingForm";

/**
 * Page that renders JobPostingForm Components
 * includes EmployerNavbar
 */
class EmployerJobForm extends React.Component {
    render() {
        return (
            <div>
                {/* Renders EmployerNavbar component */}
                <EmployerNavbar msgCount={0} notificationCount={0}/>

                {/* Renders JobPostingForm component */}
                <JobPostingForm/>
            </div>
        );
    }
}

export default EmployerJobForm;