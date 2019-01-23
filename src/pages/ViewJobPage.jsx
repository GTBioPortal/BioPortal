import React from 'react';
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import { withRouter, push } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/app.scss';

import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';

class ViewJobPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showUploadSnackbar: true };
        //:this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    handleSnackbarClose = () => {
        this.setState({ showUploadSnackbar: false });
    }

    render() {
        console.log(this.props.location.data.job);
        const job = this.props.location.data.job;
        return (
            <div>
                <Navbar msgCount={0} notificationCount={0}/>
                <TextField label={job.company}/>
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
)(ViewJobPage));