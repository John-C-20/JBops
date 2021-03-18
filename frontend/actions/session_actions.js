import * as SessionAPIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"


const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    user: currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    //errors is an array of error messages
    type: RECEIVE_ERRORS,
    errors 
})


export const signup = (user) => dispatch => (
    SessionAPIUtil.signup(user)
    .then(result => dispatch(receiveCurrentUser(result)))
)

export const login = (user) => dispatch => (
    SessionAPIUtil.login(user)
    .then(result => dispatch(receiveCurrentUser(result)))
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
    .then(result => dispatch(logoutCurrentUser()))
)

