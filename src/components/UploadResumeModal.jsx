import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideUploadResume }  from '../actions/modals'

import '../styles/modals.scss'


class UploadResumeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { resumeSelected: false, resumeName: "No file selected." };
        this.uploadResume = this.uploadResume.bind(this);
        this.resumeChange = this.resumeChange.bind(this);
    }

    uploadResume() {
        if (!this.state.resumeSelected) {
            console.log("Error uploading Resume");
        } else {
            console.log(this.state.resumeName);
            console.log("Resume uploaded successfully");
            this.props.hideUploadResume();
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
                    <span className='modal-title'>Upload Resum&#233;</span>
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
    return bindActionCreators({ hideUploadResume }, dispatch);
}

export default connect(
    null,
    mapDispatchToProps    
)(UploadResumeModal);
