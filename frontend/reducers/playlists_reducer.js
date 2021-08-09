import {GET_PLAYLISTS, GET_PLAYLIST, MAKE_PLAYLIST, UPDATE_PLAYLIST, DELETE_PLAYLIST} from '../actions/playlist_actions'

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case GET_PLAYLISTS:
            return action.playlists;
            case GET_PLAYLIST: 
            return action.playlist;
        case MAKE_PLAYLIST: 
            return Object.assign({}, state, {[action.playlist.id]: action.playlist});
        case UPDATE_PLAYLIST:
            return Object.assign({}, state, {[action.playlist.id]: action.playlist})
        case DELETE_PLAYLIST:
            const newState = Object.assign({}, state)
            delete newState[action.playlist.id]
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer; 