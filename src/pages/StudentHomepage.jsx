import React from 'react';
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import Navbar from '../components/Navbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';

import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

class StudentHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showUploadSnackbar: true };
        //:this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    handleSnackbarClose = () => {
        this.setState({ showUploadSnackbar: false });
    }

    render() {
        return (
            <div>
                <Navbar msgCount={0} notificationCount={0}/>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.props.showUploadSnackbar && this.state.showUploadSnackbar}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={2000}
                    message={<span id='message-id'>Resume uploaded successfully!</span>} />
                <JobGrid />

                <BaseModal />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showUploadSnackbar: state.showUploadSnackbar
    }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(StudentHomePage));
