import React, {useState, useEffect} from 'react'
import JbopsContainer from '../../components/jbops/jbops_container';
import Sidebar from './sidebar';
import Navbar from '../navbar/navbar'; 
import { useSelector } from 'react-redux';

const Splash = (props) => {
    const currentUser = useSelector(state => state.entities.users[state.session.currentUserId])
    return(
        <div className={currentUser ? `splash logged-in` : "splash"}>
            <Navbar /> 
            <Sidebar /> 
            <JbopsContainer /> 
        </div>
    )
}

export default Splash; 
