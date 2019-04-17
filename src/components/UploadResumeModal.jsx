import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideUploadResume, showUploadSnackbar }  from '../actions/modals'

import '../styles/modals.scss';
import API from '../api/api';

/**
 * Upload Resume component which handles uploading a resume from a local
 * computer
 */
class UploadResumeModal extends React.Component {
    constructor(props) {
        super(props);
        // console.log(auth_token);
        this.state = { resumeSelected: false, resume: null, resumeName: ''};
        this.uploadResume = this.uploadResume.bind(this);
        this.resumeChange = this.resumeChange.bind(this);
    }

    // sends messages to the console that checks to see if the Resume was
    // properly uploaded
    uploadResume() {
        if (!this.state.resumeSelected) {
            console.log("Error uploading Resume");
        } else {
            var auth_token = localStorage.getItem('token')
            var authorize = 'Bearer ' + auth_token
            var headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': authorize
            }
            var formData = new FormData();
            formData.append('file', this.state.resume)
            formData.append('file_name', this.state.resumeName)
            formData.append('file_type', 'resume')
            API.post('/upload', 
                formData,
                {headers: headers}
            ).then(res => {
                console.log(res);
            });
            console.log(this.state.resumeName);
            console.log("Resume uploaded successfully");
            this.props.hideUploadResume();
            this.props.showUploadSnackbar();
        }
    }

    resumeChange(e) {
        this.setState({
            resumeSelected: true,
            resume: e.target.files[0],
            resumeName: e.target.files[0].name
        });

    }

    render () {
        return (
            <Modal
                open={true}
                onClose={this.props.hideUploadResume}>
                <div className='resume-modal'>
                    <Typography variant='headline'>
                        <span className='modal-title'>Upload Resum&#233;</span>
                    </Typography>
                    <div id='file-upload'>
                        <input
                            accept='application/pdf'
                            hidden
                            onChange={this.resumeChange}
                            type='file'
                            id='file-button'/>
                        <label htmlFor='file-button'>
                            <Button component='span' variant='contained' color='primary'>
                                Browse...
                            </Button>
                        </label>
                        <Typography variant='subtitle1' nowrap='true' className='file-name'>
                            {this.state.resumeName}
                        </Typography>
                    </div>
                    <div id='buttons'>
                        <Button variant='contained'
                            color='primary'
                            disabled={!this.state.resumeSelected}
                            id='upload-button'
                            onClick={this.uploadResume}>
                            Upload
                        </Button>
                        <Button variant='outlined'
                            onClick={this.props.hideUploadResume}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hideUploadResume, showUploadSnackbar }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(UploadResumeModal);
