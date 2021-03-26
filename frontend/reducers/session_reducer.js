import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    SET_CURRENT_TIME,
    SET_CURRENT_PROGRESS,
} from "../actions/session_actions"

import {GET_SONG} from '../actions/song_actions'

const sessionReducer = (defaultState = {currentUserId: null, currentSongId: null, currentTime: 0, currentProgress: 0}, action) => {
    Object.freeze(defaultState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, defaultState, {currentUserId: action.user.id})
        case LOGOUT_CURRENT_USER: 
            return Object.assign({}, defaultState, {currentUserId: null})
        case GET_SONG: 
            return Object.assign({}, defaultState, {currentSong: action.song})
        case SET_CURRENT_TIME:
            return Object.assign({}, defaultState, {currentTime: action.currentTime})
        case SET_CURRENT_PROGRESS:
            return Object.assign({}, defaultState, {currentProgress: action.currentProgress})
        default:
            return defaultState 
    }
}

export default sessionReducer;
