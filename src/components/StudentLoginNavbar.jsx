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
import { withRouter, push } from 'react-router-dom';


import '../styles/toolbar.scss'

class StudentLoginNavbar extends React.Component {


    registerStudent = () => {
        const path = '/registerStudent';
        this.props.history.push(path);
    }

    loginStudent = () => {
        const path = '/studentLogin';
        this.props.history.push(path);
    }

    render() {
        return (
            <AppBar position='static' className='Navbar'>
                <Toolbar>
                    <Typography variant='title' color='inherit' className='grow'>
                        BioPortal
                    </Typography>
                    <Button color="inherit"  onClick={this.loginStudent}>Login</Button>
                    <Button color="inherit"  onClick={this.registerStudent}>Register</Button>

                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(StudentLoginNavbar);
