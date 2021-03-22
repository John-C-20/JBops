import {GET_PLAYLISTS, GET_PLAYLIST} from '../actions/playlist_actions'

const playlistsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)
    let newState = Object.assign({}, defaultState)

    switch (action.type) {
        case GET_PLAYLISTS:
            action.playlists.forEach((playlist) => {
                newState[playlist.id] = playlist
            })
            return newState;
        case GET_PLAYLIST: 
            newState[action.playlist.id] = action.playlist
            return newState;
        default:
            return defaultState;
    }
}

export default playlistsReducer; 