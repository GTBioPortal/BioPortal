import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EmployerNavbar from '../components/EmployerNavbar';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
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

    emailStudent(el) {
        const path = '/emailStudentPage';
        this.props.history.push({
            pathname: path,
            data: el
        });
    }
    
    downloadFile(id, app) {
        // console.log(app);
        //console.log(app);
        var auth_token = localStorage.getItem('employer-token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + id;
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.post(url,
            {application_id: app},
            {responseType: 'blob', 
            headers: headers}
        ).then(res => {
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
        console.log(this.state.apps);
        return (
        	<div>
                <EmployerNavbar msgCount={0} notificationCount={0}/>
                <br/>
                <Typography variant="h2" align="center" >
                    Applicants
                </Typography>
                <br/>
                <Grid container direction="column" justify="center" alignItems="center">
                    {this.state.apps.map((el, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid container direction="row" justify="center" alignItems="center">
                                <Typography variant='subtitle1' align='center' gutterBottom> Applicant: {el.applicant.name} </Typography>
                                <IconButton color='inherit' onClick = {() => this.emailStudent(el)}>
                                        <Badge color='secondary' badgeContent={0} invisible={true}>
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                    {(el.resume != null) && <Link align="center" variant="subtitle1" onClick={() => this.downloadFile(el.resume, el.id)} gutterBottom>Resume <br/> </Link>}
                                    {(el.cover_letter != null) && <Link align="center" variant="subtitle1" onClick={() => this.downloadFile(el.cover_letter, el.id)} gutterBottom>Cover Letter <br/> </Link>}
                                    {(el.transcript != null) && <Link align="center" variant="subtitle1" onClick={() => this.downloadFile(el.transcript, el.id)} gutterBottom>Transcript <br/> </Link>}
                                </Grid>
                            </React.Fragment>)
                    })}
                </Grid>
        	</div>

        )
    }
}

// export component for use/routing
export default withRouter (ViewApplicantsPage);