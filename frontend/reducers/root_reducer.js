import {combineReducers} from 'redux' 
import sessionReducer from "../reducers/session_reducer"
import entitiesReducer from "../reducers/entities_reducer"
import errorsReducer from "../reducers/errors_reducer"
import modalReducer from "../reducers/modal_reducer"
import queueReducer from './queue_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    queue: queueReducer,
    modal: modalReducer 
})

export default rootReducer; 