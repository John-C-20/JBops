import { NEXT, PREVIOUS, PLAY, QUEUE_PLAYLIST, PAUSE, QUEUE, DEQUEUE, REPEAT, SHUFFLE } from '../actions/queue_actions'

const defaultState = {queue: [], pos: 0, repeat: false, shuffle: false}

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
            return Object.assign({}, state, { pos: state.queue.length - state.queue.pos - 1})
        case PLAY: 
            return Object.assign({}, state, {queue: [action.track], pos: 0})
        case QUEUE:
            newState.queue.push(action.track)
            return newState;
        case QUEUE_PLAYLIST: 
            const pos =  Object.values(action.payload.playlist.songs).findIndex(song => song.id === action.payload.track.id)
            return Object.assign({}, state, {queue: Object.values(action.payload.playlist.songs), pos: pos})
        case DEQUEUE:
            const newQueue = state.queue.filter(track => track.id !== action.track.id)
            return Object.assign({}, state, {queue: newQueue});
        case REPEAT: 
            return Object.assign({}, state, {repeat: !state.repeat});
        case SHUFFLE: 
            return Object.assign({}, state, {shuffle: !state.shuffle});
        default:
            return state;
    }
}

export default queueReducer;