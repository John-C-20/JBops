import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout, fetchUsers} from "./util/session_api_util"

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
window.fetchUsers = fetchUsers 