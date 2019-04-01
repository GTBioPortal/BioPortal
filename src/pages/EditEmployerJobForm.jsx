import React from 'react';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/app.scss';
import EditJobPosting from "../components/EditJobPosting";

/**
 * EditEmployerJobForm renders the EditJobPosting component which contains a selected job position and its details
 * includes EmployerNavbar
 */
class EditEmployerJobForm extends React.Component {
	constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/** Renders the employer navbar component*/}
                <EmployerNavbar msgCount={0} notificationCount={0}/>
                {/** Renders the edit job posting component with the job position*/}
                <EditJobPosting vars={this.props.location.data}/>
            </div>
        );
    }
}

// export page for use
export default EditEmployerJobForm;