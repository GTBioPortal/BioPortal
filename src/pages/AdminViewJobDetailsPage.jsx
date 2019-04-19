import React from 'react';
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import { withRouter, push } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminJobDescription from '../components/AdminJobDescription'
import '../styles/app.scss';
import { hideUploadSnackbar } from '../actions/modals'
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Chip from '@material-ui/core/Chip';

/**
 * ViewJobPage renders the JobDescription component which allows the user to view the job and its description
 * includes Navbar
 */
class AdminViewJobDetailsPage extends React.Component {
    // set default states
    constructor(props) {
        super(props);
    }

    render() {
        return (
            /**
            * add components to show on page
            * set snackbar to show confirmation message after uploading resume
            */
            <div>
                <AdminNavbar msgCount={0} notificationCount={0}/>
                <AdminJobDescription />
            </div>
        );
    }
}

// export page for use/routing
export default withRouter(AdminViewJobDetailsPage);
