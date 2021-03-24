import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions"

import {GET_SONG} from '../actions/song_actions'

const sessionReducer = (defaultState = {currentUserId: null, currentSongId: null}, action) => {
    Object.freeze(defaultState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, defaultState, {currentUserId: action.user.id})
        case LOGOUT_CURRENT_USER: 
            return Object.assign({}, defaultState, {currentUserId: null})
        case GET_SONG: 
            return Object.assign({}, defaultState, {currentSong: action.song})
        default:
            return defaultState 
    }
}

export default sessionReducer;
