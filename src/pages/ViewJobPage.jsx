import React from 'react';
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import { withRouter, push } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobDescription from '../components/JobDescription'
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

class ViewJobPage extends React.Component {
    // set default states
    constructor(props) {
        super(props);
        this.state = { showUploadSnackbar: true };
    }

    // hides the upload snackbar before rendering page
    componentWillUnmount(){
        this.props.hideUploadSnackbar();
    }

    // set the state of showUploadSnackbar to false
    handleSnackbarClose = () => {
        this.setState({ showUploadSnackbar: false });
    }

    render() {
        return (
            /**
            * add components to show on page
            * set snackbar to show confirmation message after uploading resume
            */
            <div>
                <Navbar msgCount={0} notificationCount={0}/>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.props.showUploadSnackbar && this.state.showUploadSnackbar}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={2000}
                    message={<span id='message-id'>Resume uploaded successfully!</span>} />
                <JobDescription />
                <BaseModal />
            </div>
        );
    }
}

// map state variables to props
function mapStateToProps(state) {
    return {
        showUploadSnackbar: state.showUploadSnackbar
    }
}

// map actions to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hideUploadSnackbar }, dispatch);
}

// export page for use/routing
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewJobPage));
