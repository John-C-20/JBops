import * as SongAPIUtil from '../util/song_api_util';
import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const NEXT = "NEXT"
export const PREVIOUS = "PREVIOUS"
export const PLAY = "PLAY"
export const PAUSE = "PAUSE"
export const QUEUE = "QUEUE"
export const DEQUEUE = "DEQUEUE"
export const QUEUE_PLAYLIST = 'QUEUE_PLAYLIST'
export const SHUFFLE = "SHUFFLE"
export const REPEAT = "REPEAT"


export const nextTrack = () => ({
    type: NEXT
})

export const previousTrack = () => ({
    type: PREVIOUS,
})

export const shuffle = () => ({
    type: SHUFFLE
})

export const repeat = () => ({
    type: REPEAT
})

const playTrack = track => ({
    type: PLAY,
    track
})

const queueTrack = (track) => ({
    type: QUEUE,
    track
})

const queue_Playlist = (playlist, track) => ({
    type: QUEUE_PLAYLIST,
    payload: {playlist, track}
})

const dequeueTrack = (track) => ({
    type: DEQUEUE,
    track
})


export const playSong = (songId) => dispatch => {
    return (SongAPIUtil.fetchSong(songId)
        .then((song) => dispatch(playTrack(song)))
    )
}
export const queueSong = (songId) => dispatch => {
    return (SongAPIUtil.fetchSong(songId)
        .then((song) => dispatch(queueTrack(song)))
    )
}

export const queuePlaylist = (playlistId, track) => dispatch => (
    PlaylistAPIUtil.fetchPlaylist(playlistId)
        .then(playlist => dispatch(queue_Playlist(playlist, track)))
)
