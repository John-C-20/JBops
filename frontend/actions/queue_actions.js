import * as SongAPIUtil from '../util/song_api_util';

export const SKIP = "SKIP"
export const PREVIOUS = "PREVIOUS"
export const PLAY = "PLAY"
export const PAUSE = "PAUSE"
export const QUEUE = "QUEUE"
export const DEQUEUE = "DEQUEUE"

export const skipTrack = () => ({
    type: SKIP
})
export const previousTrack = () => ({
    type: PREVIOUS,
})

// export const play = () => ({
//     type: PLAY
// })

// export const pause = () => ({
//     type: PAUSE
// })

const queueTrack = (track) => ({
    type: QUEUE,
    track
})

const dequeueTrack = (track) => ({
    type: DEQUEUE,
    track
})

export const queueSong = (songId) => dispatch => {
    return (SongAPIUtil.fetchSong(songId)
        .then((song) => dispatch(queueTrack(song)))
    )
}
