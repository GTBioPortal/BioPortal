import React from 'react';
import StudentLoginNavbar from '../components/StudentLoginNavbar';
import '../styles/app.scss';
import StudentLogin from "../components/StudentLogin";
import { withRouter, push } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { hideLoginFailedSnackbar } from '../actions/modals'

/**
 * Student login page that contains the Student navbar and login components
 */
class StudentLoginpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showLoginFailedSnackbar: true };
        //:this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    componentWillUnmount(){
        this.props.hideLoginFailedSnackbar();
    }

    handleSnackbarClose = () => {
        this.setState({ showLoginFailedSnackbar: false });
    }

    render() {
        return (
            <div>
                {/*creates login page with two components: navigation bar and the login interface*/}

                <StudentLoginNavbar/>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.props.showLoginFailedSnackbar && this.state.showLoginFailedSnackbar}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={2000}
                    message={<span id='message-id'>Invalid login credentials</span>} />

                <StudentLogin/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showLoginFailedSnackbar: state.showLoginFailedSnackbar
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hideLoginFailedSnackbar }, dispatch);
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentLoginpage));
