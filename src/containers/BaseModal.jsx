import React from 'react';
import UploadResumeModal from '../components/UploadResumeModal';
import { connect } from 'react-redux';
import EmailStudentModal from "../components/EmailStudentModal";

// set component modals
const MODAL_COMPONENTS = {
    'UPLOAD_RESUME': UploadResumeModal,
    'EMAIL_STUDENT': EmailStudentModal,
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
