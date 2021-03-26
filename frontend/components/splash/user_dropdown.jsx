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
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

export default UserDropdown; 