import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session_actions"

import {GET_SONG} from '../actions/song_actions'

const sessionReducer = (defaultState = {currentUserId: null}, action) => {
    Object.freeze(defaultState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            return {currentUserId: action.user.id} 
        case LOGOUT_CURRENT_USER: 
            return {currentUserId: null}
        case GET_SONG: 
            return {currentSongId: action.song.id}
        default:
            return defaultState 
    }
}

export default sessionReducer;
