import React from 'react';
import {Link} from 'react-router-dom'

const UserDropdown = (props) => (
    <div className="dropdown">
        <button onClick={toggleShow} className="dropbtn">
            {props.currentUser.username}
        </button>
        
        <div id="myDropdown" className="dropdown-content">
            <div>DOB: {props.currentUser.dob_month} {props.currentUser.dob_day}, {props.currentUser.dob_year}</div>
            <div>Gender: {props.currentUser.gender}</div>
            <div>
                <Link to='/' onClick={props.logout}>Log Out</Link>
            </div>
        </div>
    </div>
)


const toggleShow = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.fa-ellipsis-h')) {
        const songMenus = document.getElementsByClassName("menu-container");
        let j;
        for (j = 0; j < songMenus.length; j++) {
            const menu = songMenus[j];
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        }
    }
}

window.oncontextmenu = (e) => {
    e.preventDefault();

    if (!e.target.matches('.song')) {
        const songMenus = document.getElementsByClassName("menu-container");
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        let j;
        for (j = 0; j < songMenus.length; j++) {
            const menu = songMenus[j];
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        }
    }
}


export default UserDropdown; 