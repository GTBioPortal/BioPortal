import React from 'react';
import { hideUploadSnackbar } from '../actions/modals'
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import AdminNavbar from '../components/AdminNavbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import API from '../api/api'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/**
 * Student homepage that contains job cards
 */
class AdminHomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employers: []
        }

        var auth_token = localStorage.getItem('admin-token');
        var authorize = 'Bearer ' + auth_token
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get('admin/employers', {headers: headers}).then(res => {
            // console.log(res);
            var employersSort = res.data.employers;
            employersSort.sort((a,b) => a.is_approved - b.is_approved);
            // console.log(employersSort);
            this.setState({ employers: employersSort });
        });
    }

    verifyEmployer(employer) {
        var auth_token = localStorage.getItem('admin-token');
        var authorize = 'Bearer ' + auth_token
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        var url = '/employer/' + employer.id + '/verify';
        API.get(url, {headers: headers}).then(res => {
            // console.log(res);
            window.location.reload();
        });
    }

    viewJobs(employer) {
        var postings = employer.job_postings;
        var path = '/adminViewJobs'
        this.props.history.push({
            pathname: path,
            data: postings
        });
    }

    render() {
        return (
            <div>
                <AdminNavbar />
                <Grid container direction="column" justify="center" alignItems="center">
                    {this.state.employers.map((el, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Typography align="center" variant="subtitle1" gutterBottom> Company: {el.company} / Email: {el.email} / Verified: {Boolean(el.is_approved).toString()} </Typography>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    {!el.is_approved &&
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick = {() => this.verifyEmployer(el)}> Verify </Button>}
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick = {() => this.viewJobs(el)}> View Job Postings </Button>
                                    </Grid>
                            </React.Fragment>)
                    })}
                </Grid>
            </div>
        );
    }
}

export default withRouter(AdminHomePage);
