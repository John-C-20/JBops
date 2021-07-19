import { SKIP, PREVIOUS, PLAY, PAUSE, QUEUE, DEQUEUE } from '../actions/queue_actions'

const defaultState = {queue: [], pos: 0, repeat: false, shuffle: false}

const queueReducer = (state = defaultState, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case SKIP:
            return Object.assign({}, state, {pos: state.pos+1})
        case PREVIOUS:
            return Object.assign({}, state, { pos: state.queue.length - pos - 1})
        case PLAY: 
            return Object.assign({}, state, {queue: [action.track], pos: 0})
        case QUEUE:
            newState.queue.push(action.track)
            return newState;
        case DEQUEUE:
            const newQueue = state.queue.filter(track => track.id !== action.track.id)
            return Object.assign({}, state, {queue: newQueue});
        default:
            return state;
    }
}

export default queueReducer;