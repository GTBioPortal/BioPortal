import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EmployerNavbar from '../components/EmployerNavbar';
import '../styles/job-description.scss';
import '../styles/card.scss';
import API from '../api/api'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

/**
 * JobDescription component shows the description, name, location, deadline, and position for a job posting
 */
class ViewApplicantsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            apps: []
        }

        // console.log(this.props);
        // const job = this.props.location.data.job;
        var auth_token = localStorage.getItem('employer-token');
        var authorize = 'Bearer ' + auth_token
        var url = 'jobs/' + localStorage.getItem('employer-job-id') + '/applications'
        // console.log(url);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get(url, 
            {headers: headers}
        ).then(res => {
            // console.log(res.data.applications);
            this.setState({apps: res.data.applications});
        });
    }

    downloadResume(app) {
        console.log(app);
        var auth_token = localStorage.getItem('employer-token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + app.resume;
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.post(url,
            {application_id: app.id},
            {responseType: 'blob', 
            headers: headers}
        ).then(res => {
            console.log(res);
            var blob = new Blob(
                [res.data],
                {type: 'application/pdf'});
            const fileURL = URL.createObjectURL(blob);
            window.open(fileURL);
        })
        .catch(res => {
            // console.log(res);  
        });
    }

    render() {
        return (
        	<div>
                <EmployerNavbar msgCount={0} notificationCount={0}/>
                <Typography variant="h5" align="center" >
                    Applicants
                </Typography>
                <br/>
                <Grid container direction="column" justify="center" alignItems="center">
                    {this.state.apps.map((el, index) => {
                        return <Link key={index} align="center" variant="subtitle1" onClick={() => this.downloadResume(el)} gutterBottom>Applicant: {el.applicant} Resume <br/> </Link>
                    })}
                </Grid>
        	</div>

        )
    }
}

// export component for use/routing
export default withRouter (ViewApplicantsPage);