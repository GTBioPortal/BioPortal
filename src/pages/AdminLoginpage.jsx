import React from 'react';
import AdminLoginNavbar from '../components/AdminLoginNavbar';
import '../styles/app.scss';
import AdminLogin from "../components/AdminLogin";
import { withRouter, push } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { hideLoginFailedSnackbar } from '../actions/modals'

/**
 * Student login page that contains the Student navbar and login components
 */
class AdminLoginpage extends React.Component {

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

                <AdminLoginNavbar/>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.props.showLoginFailedSnackbar && this.state.showLoginFailedSnackbar}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={2000}
                    message={<span id='message-id'>Invalid login credentials</span>} />

                <AdminLogin/>
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
)(AdminLoginpage));
