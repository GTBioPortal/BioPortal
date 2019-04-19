import React from 'react';
import { hideUploadSnackbar } from '../actions/modals'
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import AdminNavbar from '../components/AdminNavbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import API from '../api/api'

/**
 * Student homepage that contains job cards
 */
class AdminHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AdminNavbar />
                ADMIN HOMEPAGE
            </div>
        );
    }
}

export default withRouter(AdminHomePage);
