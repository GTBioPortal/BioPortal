import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';


import '../styles/card.scss';

/**
 * JobCard component shows an individual job posting
 * and allows a student to click on it to edit it
 */
class JobCard extends React.Component {
    // bind the viewJob function
    constructor(props) {
        super(props)
        this.viewJob = this.viewJob.bind(this);
    }

    // function to open up page to view a job position
    viewJob() {
        const { job } = this.props;
        const path = '/job/' + job.id;
        this.props.history.push({
            pathname: path,
            data: this.props
        });
    }

    render() {
        const { job, i } = this.props;
        return (
            /** create card from individual job */
            <td key={i} className='card-td job-card'>
            <Card className='card job-card'>
                {/** set content of card to be job position, job location and job company */}
                <CardContent>
                    <Typography className='card-title' gutterBottom>
                        {job.company}
                    </Typography>
                    <Typography color='textSecondary'>
                        {job.position}
                    </Typography>
                    <Typography color='textSecondary'>
                        {job.location}
                    </Typography>
                </CardContent>
                {/** set card to call the viewJob function when the view job button is clicked */}
                <CardActions id='view-job-div'>
                    <Button size='small' id='view-job' onClick={this.viewJob}>View Job</Button>
                </CardActions>
            </Card>
        </td>
        )
    }
}

// export component for use/routing
export default withRouter (JobCard);