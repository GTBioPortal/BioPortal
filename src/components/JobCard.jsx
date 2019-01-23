import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/card.scss';

class JobCard extends React.Component {
    constructor(props) {
        super(props)
        this.viewJob = this.viewJob.bind(this);
    }

    viewJob() {
        let path = '/viewjobs';
        this.props.history.push(path);
    }

    render() {
        const { job, i } = this.props;
        return (
            <td key={i} className='card-td job-card'>
            <Card className='card job-card'>
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

                <CardActions id='view-job-div'>
                    <Button size='small' id='view-job' onClick={this.viewJob}>View Job</Button> 
                </CardActions>
            </Card>
        </td>
        )
    }
}

export default withRouter (JobCard);