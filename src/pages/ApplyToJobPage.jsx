import React from 'react';
import Navbar from '../components/Navbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';
import { connect } from 'react-redux';
import API from '../api/api'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import '../styles/job-description.scss';
import '../styles/card.scss';
import Grid from '@material-ui/core/Grid';


class ApplyToJobPage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get('student/files', 
        	{headers: headers}
        ).then(res => {
            console.log(res.data.files[0]);
      	})

      	this.state = {
      		resume_names: name
      	}
      	// console.log(this.state)
    }

    sendApp = () => {
    	const job = this.props.location.data;
    	var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token
        var url = 'jobs/' + job.id + '/apply'
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        var data = {
        	'resume': 3
        }
        API.post(url, 
            data,
            {headers: headers}
        ).then(res => {
            console.log(res);
      });
    }

    render() {
    	const job = this.props.location.data;
    	// console.log(job)
        return (
        	<div>
        		<Navbar msgCount={0} notificationCount={0}/>
                {/** place job company */}
	        	<Typography variant="h2" align="center" className='title' gutterBottom>
	        		{job.company}
	        	</Typography>
                {/** place job position */}
	        	<Typography variant="h5" align="center" >
        			{job.position}
        		</Typography>
                {/** place job location and deadline */}
        		<Typography variant="h5" align="center" gutterBottom>
        			{job.location} | {job.deadline}
        		</Typography>
        		<div align="center">
                    {/** place job description */}
	        		<Typography variant="subheading" align="center" gutterBottom>
	        		Job Description:
	        		</Typography>
	        		<Card className='job-description-card'>
		                <CardContent>
		                    <Typography color='textSecondary' align="left">
                                {job.description}
								</Typography>
		                </CardContent>
	           	 	</Card>
           	 	</div>
           	 	<Typography variant="h5" align="center" gutterBottom>
        			{this.state.resume_names}
        		</Typography>
        		<Grid container direction="row" justify="center" alignItems="center">
           	 		<Button size='medium' align='center' onClick={this.sendApp}>Send Application</Button>
           	 	</Grid>	
        	</div>
        );
    }
}

export default ApplyToJobPage;
