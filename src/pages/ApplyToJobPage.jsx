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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

class ApplyToJobPage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            resume_names: [],
            resume_ids: [],
            job: [],
            anchorEl: null,
            selected_id: '',
            selected_resume: ''
        }
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get('student/files',
        	{headers: headers}
        ).then(res => {
            // console.log(res.data.files);
            var temp_names = [];
            var temp_ids = [];
            for (var i = 0; i < res.data.files.length; i++) {
                temp_names.push(res.data.files[i].name);
                temp_ids.push(res.data.files[i].id);
            }
            this.setState({resume_names: temp_names});
            this.setState({resume_ids: temp_ids})
            // console.log(this.state);
      	})
        var url = 'jobs/' + localStorage.getItem('job-id')
        API.get(url).then(res => {
            // var allJobs = res.data.jobs;
            // console.log(res.data);
            this.setState({ job: res.data.data });
        })
      	// console.log(this.state)
    }

    sendApp = () => {
    	const job = this.state.job;
    	var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token
        var url = 'jobs/' + job.id + '/apply'
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        var data = {
        	'resume': this.state.selected_id
        }
        API.post(url,
            data,
            {headers: headers}
        ).then(res => {
            console.log(res);
      });
      // console.log(this.state.selected_id);
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    downloadResume = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id;
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get(url,
            {responseType: 'blob',
            headers: headers}
        ).then(res => {
            // console.log(res);
            var blob = new Blob(
                [res.data],
                {type: 'application/pdf'});
            const fileURL = URL.createObjectURL(blob);
            window.open(fileURL);
        })
        .catch(res => {
            // console.log(res);
        });
    }

    handleClose = (ev) => {
        this.setState({ anchorEl: null });
        var selectedResume = ev.nativeEvent.target.outerText;
        for (var i = 0; i < this.state.resume_names.length; i++) {
            if (this.state.resume_names[i] === selectedResume) {
                this.setState({
                    selected_id: this.state.resume_ids[i],
                    selected_resume: "Selected Resume: " + this.state.resume_names[i]
                });
            }
        }
    };

    render() {
    	const job = this.state.job;
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
                <div>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Button
                          aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                          aria-haspopup="true"
                          onClick={this.handleClick}>
                          Select a Resume
                        </Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={this.state.anchorEl}
                          open={Boolean(this.state.anchorEl)}
                          onClose={this.handleClose}>
                          {this.state.resume_names.map((el, index) => {
                            return <MenuItem key={index} onClick={this.handleClose}>{el}</MenuItem>;
                          })}
                        </Menu>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Link variant="subtitle1" align="center" onClick={this.downloadResume} gutterBottom>
                            {this.state.selected_resume}
                        </Link>
                    </Grid>
                </div>
        		<Grid container direction="row" justify="center" alignItems="center">
           	 		<Button size='medium' align='center' onClick={this.sendApp}>Send Application</Button>
           	 	</Grid>
        	</div>
        );
    }
}

export default ApplyToJobPage;
