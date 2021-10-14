import React from 'react';
import {Link} from 'react-router-dom'

const UserDropdown = (props) => (
    <div className="dropdown">
        <button onClick={toggleShow} className="dropbtn">
            {props.currentUser.username}
        </button>
        
        <div id="myDropdown" className="dropdown-content">
            {/* <div>DOB: {props.currentUser.dob_month} {props.currentUser.dob_day}, {props.currentUser.dob_year}</div>
            <div>Gender: {props.currentUser.gender}</div> */}
            {/* <div>
                <a href="https://john-cheung.me">Portfolio</a>
            </div> */}
            <div className="links">
                <a href="https://www.linkedin.com/in/john-cheung-9535a213b/" target="_blank">Linked <i className="fa fa-linkedin-square"></i></a>
            </div>
            <div className="links">
                <a href="https://github.com/john-c-20" target="_blank">GitHub <i className="fa fa-github"></i></a>
            </div>

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

    if (!event.target.matches('.boop')) {
        const playlistMenus = document.getElementsByClassName("menu-container1");
        let k;
        for (k = 0; k < playlistMenus.length; k++) {
            const menu = playlistMenus[k];
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
    
    if (!e.target.matches('.boop')) {
        const playlistMenus = document.getElementsByClassName("menu-container1");
        let k;
        for (k = 0; k < playlistMenus.length; k++) {
            const menu = playlistMenus[k];
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        }
    }
}


export default UserDropdown; 