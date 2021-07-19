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

export const queueTrack = (track) => ({
    type: QUEUE,
    track
})

export const dequeueTrack = (track) => ({
    type: DEQUEUE,
    track
})