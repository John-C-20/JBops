import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const GET_PLAYLISTS = 'GET_PLAYLISTS'
export const GET_PLAYLIST = 'GET_PLAYLIST'

const getPlaylists = (playlists) => ({
    type: GET_PLAYLISTS,
    playlists
})

const getPlaylist = (playlist) => ({
    type: GET_PLAYLIST,
    playlist
})

export const fetchPlaylists = () => dispatch => (
    PlaylistAPIUtil.fetchPlaylists()
    .then((playlists) => dispatch(getPlaylists(playlists)))
)

export const fetchPlaylist = (playListId) => dispatch => {
    return (PlaylistAPIUtil.fetchPlaylists(playListId)
    .then((playlist) => dispatch(getPlaylist(playlist)))
    )}
