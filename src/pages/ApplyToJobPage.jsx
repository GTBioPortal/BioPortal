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
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { showUploadCoverLetter, showUploadTranscript } from '../actions/modals';
import { bindActionCreators } from 'redux';


class ApplyToJobPage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            job: [],
            name: null,
            email: localStorage.getItem("studentEmail"),
            resumes: [],
            cover_letters: [],
            transcripts: [],
            anchorEl: null,
            anchorElcov: null,
            anchorElTrans: null,
            selected_id: '',
            selected_resume: '',
            selected_cover_letter: '',
            selected_transcript: '',
            selected_id_coverLetter: '',
            selected_id_transcript: '',
            deleteFlag: false,
            deleteFlagCov: false,
            deleteFlagTrans: false
        }

        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        };
        API.get('student/files',
            {headers: headers}
        ).then(res => {
            // console.log(res.data.files);
            var tempres = [];
            var tempcov = [];
            var temptrans = [];
            for (var i = 0; i < res.data.files.length; i++) {
                if (res.data.files[i].document_type === "resume") {
                    tempres.push(res.data.files[i]);
                }
                if (res.data.files[i].document_type === "cover_letter") {
                    tempcov.push(res.data.files[i]);
                }
                if (res.data.files[i].document_type === "transcript") {
                    temptrans.push(res.data.files[i]);
                }
            }
            this.setState({
                resumes: tempres,
                cover_letters: tempcov,
                transcripts: temptrans
            });
            // console.log(this.state.resumes);
        });

        var url = 'jobs/' + localStorage.getItem('job-id');
        API.get(url).then(res => {
            this.setState({job: res.data.data})
        })
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

        var data = {}

        if (this.state.selected_id_coverLetter != '') {
            data['cover_letter'] = this.state.selected_id_coverLetter
        }

        if (this.state.selected_id_transcript != '') {
            data['transcript'] = this.state.selected_id_transcript
        }

        if (this.state.selected_id != '') {
            data['resume'] = this.state.selected_id
        }

        API.post(url,
            data,
            {headers: headers}
        ).then(res => {

      });
      // console.log(this.state.selected_id);
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClickcov = event => {
        this.setState({ anchorElcov: event.currentTarget });
    };

    handleClickTrans = event => {
        this.setState({ anchorElTrans: event.currentTarget });
    };

    handleMenuClose = (ev) => {
        this.setState({ anchorEl: null });
    };

    handleMenuCloseCov = (ev) => {
        this.setState({ anchorElcov: null });
    };

    handleMenuCloseTrans = (ev) => {
        this.setState({ anchorElTrans: null });
    };

    handleClose(resume) {
        this.setState({
            anchorEl: null,
            selected_id: resume.id,
            selected_resume: resume.name,
            deleteFlag: true
        });
        // console.log(this.state.selected_resume);
    };

    handleCloseCov(cover_letter) {
        this.setState({
            anchorElcov: null,
            selected_id_coverLetter: cover_letter.id,
            selected_cover_letter: cover_letter.name,
            deleteFlagCov: true
        });
    }

    handleCloseTrans(transcript) {
        this.setState({
            anchorElTrans: null,
            selected_id_transcript: transcript.id,
            selected_transcript: transcript.name,
            deleteFlagTrans: true
        });
    }

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
    };

    downloadCoverLetter = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id_coverLetter;
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
    };

    downloadTranscript = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id_transcript;
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
    };

    dateParser(stringDate) {
        const temp = stringDate.split(" ")
        const parsedDate = temp[0] + " " + temp[1] + " " + temp[2] +  " "  + temp[3]
        return parsedDate
    };

    render() {
    	const job = this.state.job;
        const deadLine = String(job.deadline)
        const temp = deadLine.split(" ")
        const parsedDate = this.dateParser(deadLine)
        const parsedStartDate = this.dateParser(String(job.start_date))
        const parsedCreatedDate = this.dateParser(String(job.created_at))
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
                            <div>
                                <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
                                    <Grid item xs ={12}>
                                        <Grid container direction = "column">
                                                <Button
                                                  variant= "outlined"
                                                  aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                                                  aria-haspopup="true"
                                                  onClick={this.handleClick}>
                                                  Select a Resume
                                                </Button>
                                                <Menu
                                                  id="simple-menu"
                                                  anchorEl={this.state.anchorEl}
                                                  open={Boolean(this.state.anchorEl)}
                                                  onClose={this.handleMenuClose}>
                                                  {this.state.resumes.map((el, index) => {
                                                    return <MenuItem key={index} onClick={() => this.handleClose(el)}> {el.name} </MenuItem>;
                                                  })}
                                                </Menu>
                                                <Link variant="subtitle1" align="center" onClick={this.downloadResume} gutterBottom>
                                                    {this.state.selected_resume}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    <Grid item xs = {12}>
                                        <Grid container direction="column">
                                            <Button
                                              variant= "outlined"
                                              aria-owns={this.state.anchorElcov ? 'simple-menu' : undefined}
                                              aria-haspopup="true"
                                              onClick={this.handleClickcov}>
                                              Select a Cover Letter
                                            </Button>
                                            <Menu
                                              id="simple-menu"
                                              anchorEl={this.state.anchorElcov}
                                              open={Boolean(this.state.anchorElcov)}
                                              onClose={this.handleMenuCloseCov}>
                                              {this.state.cover_letters.map((el, index) => {
                                                return <MenuItem key={index} onClick={() => this.handleCloseCov(el)}> {el.name} </MenuItem>;
                                              })}
                                            </Menu>
                                            <Link variant="subtitle1" align="center" onClick={this.downloadCoverLetter} gutterBottom>
                                                {this.state.selected_cover_letter}
                                            </Link>

                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                          variant= "outlined"
                                          aria-owns={this.state.anchorElTrans ? 'simple-menu' : undefined}
                                          aria-haspopup="true"
                                          onClick={this.handleClickTrans}>
                                          Select a Transcript
                                        </Button>
                                        <Menu
                                          id="simple-menu"
                                          anchorEl={this.state.anchorElTrans}
                                          open={Boolean(this.state.anchorElTrans)}
                                          onClose={this.handleMenuCloseTrans}>
                                          {this.state.transcripts.map((el, index) => {
                                            return <MenuItem key={index} onClick={() => this.handleCloseTrans(el)}> {el.name} </MenuItem>;
                                          })}
                                        </Menu>
                                    </Grid>
                                    <Grid item>
                                        <Link variant="subtitle1" align="center" onClick={this.downloadTranscript} gutterBottom>
                                            {this.state.selected_transcript}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </CardContent>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <CardActions id='view-job-div'>
                                <Button style={{padding: 10}} onClick={this.sendApp} size = 'small' align= 'center' variant="contained">
                                Send Application
                                {/** <Icon>send</Icon>*/}
                              </Button>
                            </CardActions>
                            <br/>
                        </Grid>
                        <br/>
                    </Card>
                </div>
        	</div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showUploadCoverLetter, showUploadTranscript }, dispatch);
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(ApplyToJobPage));