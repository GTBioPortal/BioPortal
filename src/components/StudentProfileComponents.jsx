import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API from '../api/api';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { showUploadCoverLetter, showUploadTranscript } from '../actions/modals';
import { withRouter, push } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Contains all the student profile components
 */
class StudentProfileComponents extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
         this.state = {
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
        };

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
    }

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
    }

    handleMenuCloseCov = (ev) => {
        this.setState({ anchorElcov: null });  
    }

    handleMenuCloseTrans = (ev) => {
        this.setState({ anchorElTrans: null });  
    }

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

    deleteResume = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id;
        // console.log(this.state.selected_id);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.delete(url,
            {headers: headers}
        ).then(res => {
            // console.log(res);
            window.location.reload();
            alert("Resume was deleted successfully!")
        }).catch(res => {
           // console.log(res);
           if (res.response.status == 500) {
               alert("Resume is linked to a job application. Unable to delete resume.");
           } else {
                alert("Resume was not deleted successfully!")
            }
        });
    }

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

    deleteCoverLetter = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id_coverLetter;
        // console.log(this.state.selected_id);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.delete(url,
            {headers: headers}
        ).then(res => {
            // console.log(res);
            window.location.reload();
            alert("Cover letter was deleted successfully!")
        }).catch(res => {
           // console.log(res);
           if (res.response.status == 500) {
               alert("Cover letter is linked to a job application. Unable to delete Cover letter.");
           } else {
                alert("Cover letter was not deleted successfully!")
            }
        });
    }

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

    deleteTranscript = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id_transcript;
        // console.log(this.state.selected_id);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.delete(url,
            {headers: headers}
        ).then(res => {
            // console.log(res);
            window.location.reload();
            alert("Transcript was deleted successfully!")
        }).catch(res => {
           // console.log(res);
           if (res.response.status == 500) {
               alert("Transcript is linked to a job application. Unable to delete resume.");
           } else {
                alert("Transcript was not deleted successfully!")
            }
        });
    }


    render()  {
        return (
            <div className={"profile"}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <br/>
                            <Typography variant="h4" align="center">Email: {this.state.email} </Typography>
                            <br/>
                              <Grid container direction="row" justify="center" alignItems="center">
                                <Button
                                  aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                                  aria-haspopup="true"
                                  onClick={this.handleClick}>
                                  View Uploaded Resumes
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
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Link variant="subtitle1" align="center" onClick={this.downloadResume} gutterBottom>
                                    {this.state.selected_resume}
                                </Link>
                                {Boolean(this.state.deleteFlag) && <IconButton aria-label="Delete" onClick = {this.deleteResume}>
                                      <DeleteIcon/>
                                </IconButton>}

                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Button
                                  aria-owns={this.state.anchorElcov ? 'simple-menu' : undefined}
                                  aria-haspopup="true"
                                  onClick={this.handleClickcov}>
                                  View Uploaded Cover Letters
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
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Link variant="subtitle1" align="center" onClick={this.downloadCoverLetter} gutterBottom>
                                    {this.state.selected_cover_letter}
                                </Link>
                                {Boolean(this.state.deleteFlagCov) && <IconButton aria-label="Delete" onClick = {this.deleteCoverLetter}>
                                      <DeleteIcon/>
                                </IconButton>}
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Button
                                  aria-owns={this.state.anchorElTrans ? 'simple-menu' : undefined}
                                  aria-haspopup="true"
                                  onClick={this.handleClickTrans}>
                                  View Uploaded Transcripts
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
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Link variant="subtitle1" align="center" onClick={this.downloadTranscript} gutterBottom>
                                    {this.state.selected_transcript}
                                </Link>
                                {Boolean(this.state.deleteFlagTrans) && <IconButton aria-label="Delete" onClick = {this.deleteTranscript}>
                                      <DeleteIcon/>
                                </IconButton>}

                            </Grid>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Button
                                    size="medium"
                                    type="button"
                                    onClick = {this.props.showUploadCoverLetter}> Upload Cover Letter</Button>
                                <Button
                                    size="medium"
                                    type="button"
                                    onClick = {this.props.showUploadTranscript}> Upload Trasncript</Button>
                            </Grid>
                    </Grid>
                </Grid>
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
)(StudentProfileComponents));