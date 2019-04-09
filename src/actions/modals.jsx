/*
* Set all modal actions with each of its types/props
*/

export function showUploadResume(auth_token) {
    return {
        type: 'SHOW_MODAL',
        modalType: 'UPLOAD_RESUME',
        modalProps: {
            'token': auth_token
        }
    };
}

export function hideUploadResume() {
    return {
        type: 'HIDE_MODAL',
    };
}

export function showUploadSnackbar() {
    return {
        type: 'SHOW_SNACKBAR'
    };
}

export function hideUploadSnackbar() {
    return {
        type: 'HIDE_SNACKBAR'
    };
}

export function showEmailStudent() {
    return {
        type: 'SHOW_MODAL',
        modalType: 'EMAIL_STUDENT',
        modalProps: {}
    };
}


export function showLoginFailedSnackbar() {
    return {
        type: 'SHOW_SNACKBAR'
    };
}

export function hideLoginFailedSnackbar() {
    return {
        type: 'HIDE_SNACKBAR'
    };
}
