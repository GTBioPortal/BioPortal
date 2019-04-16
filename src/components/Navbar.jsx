import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showUploadResume } from '../actions/modals';
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
import { withRouter, push } from 'react-router-dom';
import '../styles/toolbar.scss'

/**
 * Navbar component sets the portal navigation items at the top of each webpage for students
 */
class Navbar extends React.Component {
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
        const path = '/studentProfile';
        this.props.history.push(path);
    };

    logOut = () => {
            this.setState({ anchorEl: null });
            const path = '/studentLogin';
            this.props.history.replace(path);
        };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            /**
             * Create a bar at the top
             */
            <AppBar position='static' className='Navbar'>
                <Toolbar>
                    {/* add portal title */}
                    <Typography variant='title' color='inherit' className='grow'>
                        BioPortal
                    </Typography>
                    <div>
                        {/* add upload resume button that calls showUploadResume function when clicked*/}
                        <Button color='inherit'
                            onClick={this.props.showUploadResume}>
                            Upload Resum&#201;
                        </Button>

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

// dispatch showUploadResume function to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showUploadResume }, dispatch);
}

// export component for use
export default withRouter(connect(
    null,
    mapDispatchToProps
)(Navbar));
