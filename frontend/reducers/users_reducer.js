import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

const usersReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let newState = Object.assign({}, defaultState)

    switch (action.type){
        case RECEIVE_CURRENT_USER: 
            newState[action.currentUser.id] = action.currentUser
            return newState;
        default:
            return defaultState; 
    }
}

export default usersReducer; 