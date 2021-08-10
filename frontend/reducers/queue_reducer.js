import { NEXT, PREVIOUS, PLAY, QUEUE_PLAYLIST, PAUSE, QUEUE, DEQUEUE, REPEAT, SHUFFLE } from '../actions/queue_actions'

const defaultState = {queue: [], queueCopy: [], pos: 0, repeat: false, shuffle: false}

const queueReducer = (state = defaultState, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case NEXT:
            if (state.repeat) {
                return Object.assign({}, state, { pos: (state.pos + 1) % state.queue.length })
            } else {
                return Object.assign({}, state, {pos: state.pos + 1})
            }
        case PREVIOUS:
            const newPos = state.pos - 1
            if (state.repeat) {
                if (newPos >= 0) {
                    return Object.assign({}, state, {pos: newPos})
                } else {
                    return Object.assign({}, state, {pos: state.queue.length + newPos})
                }
            } else {
                return Object.assign({}, state, { pos: newPos})
            }
        case PLAY: 
            return Object.assign({}, state, {queue: [action.track], pos: 0})
        case QUEUE:
            newState.queue.push(action.track)
            return newState;
        case QUEUE_PLAYLIST: 
            let pos;
            action.payload.track ? pos = Object.values(action.payload.playlist.songs).findIndex(song => song.id === action.payload.track.id) : pos = 0
            // const pos = Object.values(action.payload.playlist.songs).findIndex(song => song.id === action.payload.track.id) || 0
            return Object.assign({}, state, {queue: Object.values(action.payload.playlist.songs), pos: pos})
        case DEQUEUE:
            const newQueue = state.queue.filter(track => track.id !== action.track.id)
            return Object.assign({}, state, {queue: newQueue});
        case REPEAT: 
            return Object.assign({}, state, {repeat: !state.repeat});
        case SHUFFLE: 
            const left = state.queue.slice(0, state.pos)
            const right = state.queue.slice(state.pos + 1)
            const newArr = shuffleArray(left.concat(right))
            const currSong = state.queue[state.pos]
            newArr.splice(state.pos, 0, currSong)
            const queue = state.queue
            
            if (!state.shuffle) {
                return Object.assign({}, state, {shuffle: !state.shuffle, queueCopy: queue, queue: newArr})
            } else {
                return Object.assign({}, state, {shuffle: !state.shuffle, queue: state.queueCopy})
            }
        default:
            return state;
    }
}

function shuffleArray(arr){
    for (let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1))
        let temp = arr[i] 
        arr[i] = arr[j] 
        arr[j] = temp 
    }
    return arr
}

export default queueReducer;