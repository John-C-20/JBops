import {
    TOGGLE_MODAL
} from "../actions/modal_actions"

let defaultState = {modalOpen: false}

const modalReducer = (state = defaultState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case TOGGLE_MODAL:
            return Object.assign({}, {modalOpen: !state.modalOpen})
        default:
            return state
    }
}

export default modalReducer;
