import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withRouter, push } from 'react-router-dom';


import '../styles/toolbar.scss'

/**
 * Student Login page's navigation bar
 */
class StudentLoginNavbar extends React.Component {

    goMainHome = () => {
        const path = '/';
        this.props.history.push(path);
    }

    // changes the screen for registering a student
    registerStudent = () => {
        const path = '/registerStudent';
        this.props.history.push(path);
    }

    // changes the screen for logging a student in
    loginStudent = () => {
        const path = '/studentLogin';
        this.props.history.push(path);
    }

    render() {
        return (
            <AppBar position='static' className='Navbar'>
                <Toolbar>
                    <Typography variant='title' color='inherit' className='grow'>
                        <Link component = "button" underline = 'none' variant='title' color='inherit' className='grow' onClick = {this.goMainHome}>
                            BioPortal
                        </Link>
                    </Typography>
                    <Button color="inherit"  onClick={this.loginStudent}>Login</Button>
                    <Button color="inherit"  onClick={this.registerStudent}>Register</Button>

                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(StudentLoginNavbar);
