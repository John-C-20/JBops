import React, {useState, useEffect} from 'react'
import JbopsContainer from '../../components/jbops/jbops_container';
import Sidebar from './sidebar';
import Navbar from '../navbar/navbar'; 

const Splash = (props) => {
    return(
        <div className="splash">
            <Navbar /> 
            <Sidebar /> 
            <JbopsContainer /> 
        </div>
    )
}

export default Splash; 
