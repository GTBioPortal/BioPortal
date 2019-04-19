import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import '../styles/job-description.scss';
import '../styles/card.scss';
import API from '../api/api';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


/**
 * JobDescription component shows the description, name, location, deadline, and position for a job posting
 */
class AdminJobDescription extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            job: []
        };
        var url = 'jobs/' + localStorage.getItem('job-id')
        API.get(url).then(res => {
            // var allJobs = res.data.jobs;
            // console.log(res.data);
            this.setState({ job: res.data.data });
      })
    }

    dateParser(stringDate) {
        const temp = stringDate.split(" ")
        const parsedDate = temp[0] + " " + temp[1] + " " + temp[2] +  " "  + temp[3]
        return parsedDate
    };

    render() {
        /** get individual job from props */
    	const job = this.state.job;
        // console.log(job);
        const deadLine = String(job.deadline)
        const temp = deadLine.split(" ")
        const parsedDate = this.dateParser(deadLine)
        const parsedStartDate = this.dateParser(String(job.start_date))
        const parsedCreatedDate = this.dateParser(String(job.created_at))
        return (
        	<div>
                {/** place job company */}
	        	<Typography variant="h2" align="center" className='title' gutterBottom>
	        		{job.company}
	        	</Typography>
                {/** place job position */}
	        	<Typography variant="headline" align="center" >
        			{job.position}
        		</Typography>
                {/** place job location and deadline */}
        		<Typography variant="headline" align="center" gutterBottom>
        			Location: {job.location} | Deadline: {parsedDate}
        		</Typography>
        		<div align="center">
                    {/** place job description */}

	        		<Card className='job-description-card' raised = {true}>
		                <CardContent>
		                    <Typography color='textSecondary' align="left">
                                <Typography variant="headline" align="center" gutterBottom>
                                Job Details
                                </Typography>
                                <br/>
                                Job Description: {job.description}
								</Typography>
                                <br/>
                                <Typography color='textSecondary' align="left">
                                Start Date: {parsedStartDate}
                                </Typography>
                                <br/>
                                <Typography color='textSecondary' align="left">
                                Job Title: {job.title}
                                </Typography>
                                <br/>
                                <Typography color='textSecondary' align="left">
                                Job posted at: {parsedCreatedDate}
                                </Typography>
                                <br/>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Typography color='textSecondary' align="left">
                                    Resume Required:<Checkbox disabled={true} checked={Boolean(job.resume)} />
                                    </Typography>
                                    <Typography color='textSecondary' align="left">
                                    Cover Letter Required:<Checkbox disabled={true} checked={Boolean(job.cover_letter)} />
                                    </Typography>
                                    <Typography color='textSecondary' align="left">
                                    Transcript Required:<Checkbox disabled={true} checked={Boolean(job.transcript)} />
                                    </Typography>
                                </Grid>
		                </CardContent>
	           	 	</Card>
           	 	</div>
        	</div>

        )
    }
}

// export component for use/routing
export default withRouter (AdminJobDescription);