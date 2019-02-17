import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/card.scss';

import { Link } from 'react-router-dom';

class EmployerJobCard extends React.Component {
    constructor(props) {
        super(props)
        this.editJob = this.editJob.bind(this);
    }

    editJob() {
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
            <td key={i} className='card-td job-card'>
                <Card className='card job-card'>
                    <CardContent>
                        <Typography className='card-title' gutterBottom>
                            {job.position}
                        </Typography>
                        <Typography color='textSecondary'>
                            {job.location}
                        </Typography>
                    </CardContent>

                    <CardActions id='edit-job-div'>
                        <Button size='small' id='edit-job' onClick={this.editJob}>Edit Job Posting</Button>
                    </CardActions>
                </Card>
            </td>
        )
    }
}

export default withRouter (EmployerJobCard);