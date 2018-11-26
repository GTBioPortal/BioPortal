import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/card.scss';

class JobCard extends React.Component {

    render() {
        const { job, i } = this.props;
        return (
            <td key={i} className='card job-card'>
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

                <CardActions>
                    <Button size='small'>View Job</Button> 
                </CardActions>
            </Card>
        </td>
        )
    }
}

export default JobCard;
