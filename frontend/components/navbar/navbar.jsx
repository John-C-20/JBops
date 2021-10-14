import React, {useState, useEffect} from 'react';
import HistoryButtons from './history_buttons';
import { Link } from 'react-router-dom';
import UserDropdown from './user_dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../actions/session_actions";


const Navbar = (props) => {
    const currentUser = useSelector(state => state.entities.users[state.session.currentUserId])
    const dispatch = useDispatch();
    return(
        <div className="navbar">
            <HistoryButtons /> 
            {currentUser ? 
            <UserDropdown logout={() => dispatch(logout())} currentUser={currentUser} /> :
            <SessionLinks /> }
        </div>
    )
}

const SessionLinks = () => {
    return(
        <ul className="session-links">
            <li><Link to="/signup"><button className="signup">Sign Up</button></Link></li>
            <li><Link to="/login"><button className="login">Log In</button></Link></li>
        </ul> 
    )
}

export default Navbar;
