import React from 'react';
import UploadResumeModal from '../components/UploadResumeModal';
import { connect } from 'react-redux';
import EmailStudentModal from "../components/EmailStudent";
import ApplyToJobModal from '../components/ApplyToJobModal';
import UploadCoverLetterModal from '../components/UploadCoverLetterModal';
import UploadTranscriptModal from '../components/UploadTranscriptModal';

// set component modals
const MODAL_COMPONENTS = {
    'UPLOAD_RESUME': UploadResumeModal,
    'EMAIL_STUDENT': EmailStudentModal,
    'APPLY_TO_JOB': ApplyToJobModal,
    'UPLOAD_COVER_LETTER': UploadCoverLetterModal,
    'UPLOAD_TRANSCRIPT': UploadTranscriptModal
}

// return desired component modal
const BaseModal = ({ modals }) => {
    if (!modals.modalType) {
        return null;
    }
    const Modal = MODAL_COMPONENTS[modals.modalType];
    return <Modal {...modals.modalProps} />
}

// map modal states to props
function mapStateToProps(state) {
    return {
        modals: state.modals
    }
}

export default connect(
    mapStateToProps,
    null
)(BaseModal)
