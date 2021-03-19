import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from "../actions/session_actions" 

const sessionErrorsReducer = (defaultState = [], action) => {
    Object.freeze(defaultState)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER: 
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return defaultState 
    }
}

export default sessionErrorsReducer; 