export function showUploadResume() {
    return {
        type: 'SHOW_MODAL',
        modalType: 'UPLOAD_RESUME',
        modalProps: {}
    };
}

export function hideUploadResume() {
    return {
        type: 'HIDE_MODAL',
    };
}
