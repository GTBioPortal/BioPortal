import React from 'react';
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import Navbar from '../components/Navbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MainHomepageNavbar from '../components/MainHomepageNavbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';

import { connect } from 'react-redux';

class MainHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.studentHomepage = this.studentHomepage.bind(this);
        this.employerLoginpage = this.employerLoginpage.bind(this);
    }

    studentHomepage() {
        const path = '/studentLogin';
        this.props.history.push(path);
    }

    employerLoginpage() {
        const path = '/employerLogin';
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                //inserts the navigation bar into the top of the page
                <MainHomepageNavbar/>
                    <Typography className='top-padding' variant='h3' color='inherit' align='center' gutterBottom>
                            Welcome to BioPortal!
                        </Typography>
                //shows 2 different buttons (student and employer)
                <Grid container direction="row" justify="center" alignItems="center">
                    //defines student button
                    <Button variant='contained'
                                color='primary'
                                onClick={this.studentHomepage}>
                                Student
                            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    //defines employer button
                    <Button variant='contained'
                                color='primary'
                                onClick={this.employerLoginpage}>
                                Employer
                            </Button>
                </Grid>
            </div>

        );
    }
}

export default withRouter (MainHomepage);
