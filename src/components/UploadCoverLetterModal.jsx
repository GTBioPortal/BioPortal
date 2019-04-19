import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideUploadCoverLetter, showUploadSnackbar }  from '../actions/modals'

import '../styles/modals.scss';
import API from '../api/api';

/**
 * Upload Resume component which handles uploading a resume from a local
 * computer
 */
class UploadCoverLetterModal extends React.Component {
    constructor(props) {
        super(props);
        // console.log(auth_token);
        this.state = { fileSelected: false, file: null, fileName: ''};
        this.uploadFile = this.uploadFile.bind(this);
        this.fileChange = this.fileChange.bind(this);
    }

    // sends messages to the console that checks to see if the Resume was
    // properly uploaded
    uploadFile() {
        if (!this.state.fileSelected) {
            console.log("Error uploading Cover Letter");
        } else {
            // console.log(this.state);
            var auth_token = localStorage.getItem('token')
            var authorize = 'Bearer ' + auth_token
            var headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': authorize
            }
            var formData = new FormData();
            formData.append('file', this.state.file)
            formData.append('file_name', this.state.fileName)
            formData.append('file_type', 'cover_letter')
            API.post('/upload', 
                formData,
                {headers: headers}
            ).then(res => {
                console.log(res);
            });
            console.log(this.state.fileName);
            console.log("Cover Letter uploaded successfully");
            this.props.hideUploadCoverLetter();
            // this.props.showUploadSnackbar();
            alert("Cover letter uploaded successfully");
        }
    }

    fileChange(e) {
        this.setState({
            fileSelected: true,
            file: e.target.files[0],
            fileName: e.target.files[0].name
        });

    }

    render () {
        return (
            <Modal
                open={true}
                onClose={this.props.hideUploadCoverLetter}>
                <div className='resume-modal'>
                    <Typography variant='headline'>
                        <span className='modal-title'>Upload Cover Letter</span>
                    </Typography>
                    <div id='file-upload'>
                        <input
                            accept='application/pdf'
                            hidden
                            onChange={this.fileChange}
                            type='file'
                            id='file-button'/>
                        <label htmlFor='file-button'>
                            <Button component='span' variant='contained' color='primary'>
                                Browse...
                            </Button>
                        </label>
                        <Typography variant='subtitle1' nowrap='true' className='file-name'>
                            {this.state.fileName}
                        </Typography>
                    </div>
                    <div id='buttons'>
                        <Button variant='contained'
                            color='primary'
                            disabled={!this.state.fileSelected}
                            id='upload-button'
                            onClick={this.uploadFile}>
                            Upload
                        </Button>
                        <Button variant='outlined'
                            onClick={this.props.hideUploadCoverLetter}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ hideUploadCoverLetter, showUploadSnackbar }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps
)(UploadCoverLetterModal);