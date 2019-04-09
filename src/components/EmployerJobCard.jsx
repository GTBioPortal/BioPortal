import React from 'react';
import { withRouter, push } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/card.scss';

import { Link } from 'react-router-dom';

/**
 * EmployerJobCard component shows an individual job posting
 * and allows an employer to click on it to edit it
 */
class EmployerJobCard extends React.Component {
    // bind the editJob function
    constructor(props) {
        super(props)
        this.editJob = this.editJob.bind(this);
    }

    // function to open up page to edit a job position
    editJob() {
        const { job } = this.props;
        const path = '/editJobForm/' + job.id;
        this.props.history.push({
            pathname: path,
            data: this.props
        });
    }

    viewApps = () => {
        const { job } = this.props;
        const path = '/viewApplicants/' + job.id;
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
                    {/** set content of card to be job position and job location */}
                    <CardContent>
                        <Typography className='card-title' gutterBottom>
                            {job.position}
                        </Typography>
                        <Typography color='textSecondary'>
                            {job.location}
                        </Typography>
                    </CardContent>
                    {/** set card to call the editJob function when the edit job button is clicked */}
                    <CardActions id='edit-job-div'>
                        <Button size='small' id='edit-job' onClick={this.editJob}>Edit Job Posting</Button>
                        <Button size='small' id='view-apps' onClick={this.viewApps}>View Applicants</Button>
                    </CardActions>
                </Card>
            </td>
        )
    }
}

// export component for use/routing
export default withRouter (EmployerJobCard);