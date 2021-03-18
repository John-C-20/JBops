import React from "react";
import ReactDOM from "react-dom";
// import {signup, login, logout, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from "./actions/session_actions"
import configureStore from "./store/store";
import Root from "./components/root" 

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});


// window.signup = signup
// window.login = login
// window.logout = logout 
// window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER
// window.LOGOUT_CURRENT_USER = LOGOUT_CURRENT_USER
// window.RECEIVE_ERRORS = RECEIVE_ERRORS
window.dispatch = store.dispatch
window.getState = store.getState 

