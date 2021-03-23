import { GET_SONGS, GET_SONG } from '../actions/song_actions'

const songsReducer = (defaultState = {}, action) => {
    Object.freeze(defaultState)

    switch (action.type) {
        case GET_SONGS:
            return action.songs;
        case GET_SONG:
            return action.song;
        default:
            return defaultState;
    }
}

export default songsReducer;