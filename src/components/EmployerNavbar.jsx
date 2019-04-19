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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Link from '@material-ui/core/Link';
import {withRouter, push } from 'react-router-dom';

import '../styles/toolbar.scss'

/**
 * EmployerNavbar component sets the portal navigation items at the top of each webpage for employers
 */
class EmployerNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });

    };

    showProfile = () => {
        const path = '/employerProfile';
        this.props.history.push(path);
    };

    logOut = () => {
            this.setState({ anchorEl: null });
            const path = '/employerLogin';
            this.props.history.replace(path);
    };

    goEmployerHome = () => {
        const path = '/employer';
        this.props.history.push(path);
    }

    emailStudent = () => {
        const path = '/emailStudentPage';
        this.props.history.push(path);
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            /* create a bar at the top */
            <AppBar position='static' className='Navbar'>
                <Toolbar>
                    {/* add portal title */}
                    <Typography variant='title' color='inherit' className='grow'>
                        <Link component = "button" underline = 'none' variant='title' color='inherit' className='grow' onClick = {this.goEmployerHome}>
                            BioPortal
                        </Link>
                    </Typography>
                    <div>
                        {/* add mail badge */}
                        <IconButton color='inherit' onClick = {this.emailStudent}>
                            <Badge color='secondary' badgeContent={0} invisible={true}>
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        {/* add notifications badge */}
                        <IconButton color='inherit'>
                            <Badge color='secondary' badgeContent={0} invisible={true}>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {/* add profile badge */}
                        <IconButton aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit">
                            <AccountCircle />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}>
                            <MenuItem onClick={this.showProfile}>My Account</MenuItem>
                            <MenuItem onClick={this.logOut}>Log Out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

// export component for use
export default withRouter(EmployerNavbar);
