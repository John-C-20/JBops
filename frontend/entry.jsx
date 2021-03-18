import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from "./actions/session_actions"
import configureStore from "./store/store";

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(
        <>
        <h1>JBOPS</h1>
        <h3>this is the static_pages::root.html.erb, rendering entry.jsx</h3> 
        </>,
         root);
});


window.signup = signup
window.login = login
window.logout = logout 
window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER
window.LOGOUT_CURRENT_USER = LOGOUT_CURRENT_USER
window.RECEIVE_ERRORS = RECEIVE_ERRORS
window.dispatch = store.dispatch
window.getState = store.getState 

