import React from 'react';
import { hideUploadSnackbar } from '../actions/modals'
import BaseModal from '../containers/BaseModal';
import StudentProfileComponents from '../components/StudentProfileComponents'
import Navbar from '../components/Navbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import API from '../api/api'

/**
 * Student homepage that contains job cards
 */
class StudentProfilePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            showUploadSnackbar: true,
            jobs: []
        };
    }

    componentWillUnmount(){
        this.props.hideUploadSnackbar();
    }

    handleSnackbarClose = () => {
        this.setState({ showUploadSnackbar: false });
    }

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div>
                <Navbar msgCount={0} notificationCount={0}/>
                {/* determines if resume confirmation pop-up message needs to be displayed*/}
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.props.showUploadSnackbar && this.state.showUploadSnackbar}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={2000}
                    message={<span id='message-id'>Resume uploaded successfully!</span>} />
                <BaseModal />
                <StudentProfileComponents data = {this.props}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        showUploadSnackbar: state.showUploadSnackbar
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hideUploadSnackbar }, dispatch);
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentProfilePage));
