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
		        			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		                    </Typography>
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