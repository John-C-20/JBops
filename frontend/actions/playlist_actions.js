import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const GET_PLAYLISTS = 'GET_PLAYLISTS'
export const GET_PLAYLIST = 'GET_PLAYLIST'
export const MAKE_PLAYLIST = 'MAKE_PLAYLIST'
export const UPDATE_PLAYLIST = 'UPDATE_PLAYLIST'

const getPlaylists = (playlists) => ({
    type: GET_PLAYLISTS,
    playlists
})

const getPlaylist = (playlist) => ({
    type: GET_PLAYLIST,
    playlist
})

const makePlaylist = (playlist) => ({
    type: MAKE_PLAYLIST,
    playlist
})

const updatePlaylist = (playlist) => ({
    type: UPDATE_PLAYLIST,
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

export const createPlaylist = (data) => dispatch => (
    PlaylistAPIUtil.createPlaylist(data)
    .then(playlist => dispatch(makePlaylist(playlist)))
)

export const patchPlaylist = (playlistId, data) => dispatch => (
    PlaylistAPIUtil.patchPlaylist(playlistId, data) 
    .then(playlist => dispatch(updatePlaylist(playlist)))
)