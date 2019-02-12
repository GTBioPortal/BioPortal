import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import '../styles/job-description.scss';
import '../styles/card.scss';

class JobDescription extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
    	const job = this.props.location.data.job;
        return (
        	<div>
	        	<Typography variant="h2" align="center" className='title' gutterBottom>
	        		{job.company}
	        	</Typography>
	        	<Typography variant="h5" align="center" >
        			{job.position}
        		</Typography>
        		<Typography variant="h5" align="center" gutterBottom>
        			{job.location} | {job.deadline}
        		</Typography>
        		<div align="center">
	        		<Typography variant="subheading" align="center" gutterBottom>
	        		Job Description:
	        		</Typography>
	        		<Card className='job-description-card'>
		                <CardContent>
		                    <Typography color='textSecondary' align="left">
								Create high-quality web and mobile apps containing rich content and user interface components by working closely with user experience designers to take wireframes and mockups from conception to implementation. Identify specific issues in the user interface, recommending and implementing solutions that influence and improve the design of products that provide a delightful user experience along with high performance, security, quality, and stability.		                    </Typography>
		                </CardContent>

		                <CardActions id='view-job-div'>
		                    <Button size='small' id='apply'>Apply</Button>
		                </CardActions>
	           	 	</Card>
           	 	</div>
        	</div>

        )
    }
}

export default withRouter (JobDescription);