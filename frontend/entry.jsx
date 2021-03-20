import React from "react";
import ReactDOM from "react-dom";
// import {signup, login, logout, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from "./actions/session_actions"
import configureStore from "./store/store";
import Root from "./components/root" 


document.addEventListener("DOMContentLoaded", () => {
    let store; 
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {currentUserId: window.currentUser.id}
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");

    window.dispatch = store.dispatch
    window.getState = store.getState
    
    ReactDOM.render(<Root store={store}/>, root);
});


// window.signup = signup
// window.login = login
// window.logout = logout 
// window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER
// window.LOGOUT_CURRENT_USER = LOGOUT_CURRENT_USER
// window.RECEIVE_ERRORS = RECEIVE_ERRORS


