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

/**
 * JobDescription component shows the description, name, location, deadline, and position for a job posting
 */
class ViewApplicantsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            names: []
        }

        console.log(this.props);
        const job = this.props.location.data.job;
        var auth_token = localStorage.getItem('employer-token');
        var authorize = 'Bearer ' + auth_token
        var url = 'jobs/' + job.id + '/applications'
        // console.log(url);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get(url, 
            {headers: headers}
        ).then(res => {
            console.log(res.data.applications);
            var temp = []
             for (let i = 0; i < res.data.applications.length; i++) {
                if (i === 0) {
                    temp.push(res.data.applications[i].applicant+ ", ")
                } else {
                    temp.push(res.data.applications[i].applicant)
                }
            }
            this.setState({names: temp});
      });
    }

    render() {
        return (
        	<div>
                <EmployerNavbar msgCount={0} notificationCount={0}/>
                <Typography variant="h5" align="center" >
                    Applicants: {this.state.names}
                </Typography>
        	</div>

        )
    }
}

// export component for use/routing
export default withRouter (ViewApplicantsPage);