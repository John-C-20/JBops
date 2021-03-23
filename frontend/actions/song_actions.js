import * as SongAPIUtil from '../util/Song_api_util';

export const GET_SONGS = 'GET_SONGS'
export const GET_SONG = 'GET_SONG'

const getSongs = (songs) => ({
    type: GET_SONGS,
    songs
})

const getSong = (song) => ({
    type: GET_SONG,
    song
})

export const fetchSongs = () => dispatch => (
    SongAPIUtil.fetchSongs()
        .then((songs) => dispatch(getSongs(songs)))
)

export const fetchSong = (songId) => dispatch => {
    return (SongAPIUtil.fetchSongs(songId)
        .then((song) => dispatch(getSong(song)))
    )
}
