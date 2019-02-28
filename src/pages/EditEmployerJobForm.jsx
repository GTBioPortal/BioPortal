import React from 'react';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/app.scss';
import EditJobPosting from "../components/EditJobPosting";

class EditEmployerJobForm extends React.Component {
	constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <EmployerNavbar msgCount={0} notificationCount={0}/>

                <EditJobPosting vars={this.props.location.data}/>
            </div>
        );
    }
}

export default EditEmployerJobForm;