import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideUploadResume, showUploadSnackbar }  from '../actions/modals'

import '../styles/modals.scss';

/**
 * Upload Resume component which handles uploading a resume from a local
 * computer
 */
class ApplyToJobModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { resumeSelected: false, resumeName: "No file selected." };
        this.uploadResume = this.uploadResume.bind(this);
        this.resumeChange = this.resumeChange.bind(this);
    }

    // sends messages to the console that checks to see if the Resume was
    // properlly uploaded
    uploadResume() {
        if (!this.state.resumeSelected) {
            //console.log("Error uploading Resume");
            alert("Error uploading resume");
        } else {
            //console.log("Resume uploaded successfully");
            alert("Resume uploaded successfully");
            this.props.hideUploadResume();
            this.props.showUploadSnackbar();
        }
    }

    resumeChange(e) {
        this.setState({
            resumeSelected: true,
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
)(ApplyToJobModal);
