import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import '../styles/app.scss';
import EmployerLogin from "../components/EmployerLogin";
import { withRouter, push } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { hideLoginFailedSnackbar } from '../actions/modals'

/**
 * EmployerLoginPage renders EmployerLogin component
 * includes LoginNavbar
 */
class EmployerLoginpage extends React.Component {

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
                {/*insert navigation bar into the top of the page*/}
                <LoginNavbar/>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={this.props.showLoginFailedSnackbar && this.state.showLoginFailedSnackbar}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={2000}
                    message={<span id='message-id'>Invalid login credentials</span>} />
                {/*insert login application into the page*/}
                <EmployerLogin/>
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
)(EmployerLoginpage));
