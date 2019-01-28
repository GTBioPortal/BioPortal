export const initialModalState = {
    modalType: null,
    modalProps: {}
}

const modals = (state = initialModalState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case 'HIDE_MODAL':
            return initialModalState
        default:
            return state
    }
}

export default modals
