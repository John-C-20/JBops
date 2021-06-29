import {GET_PLAYLISTS, GET_PLAYLIST, MAKE_PLAYLIST} from '../actions/playlist_actions'

const playlistsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)

    switch (action.type) {
        case GET_PLAYLISTS:
            return action.playlists;
        case GET_PLAYLIST: 
            return action.playlist;
        case MAKE_PLAYLIST: 
            return action.playlist;
        default:
            return defaultState;
    }
}

export default playlistsReducer; 