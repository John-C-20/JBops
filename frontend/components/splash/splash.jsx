import React from 'react'
import {Link} from 'react-router-dom'; 
import UserDropdown from './user_dropdown'
import JbopsContainer from '../../components/jbops/jbops_container';
import Sidebar from './sidebar'

export default class Splash extends React.Component {
    constructor (props) {
        super(props)
    }

    
    render() {
        const sessionLinks = () => {
            return(
            <div className="splash">
                <div className="navbar">
                    <ul>
                        <li><Link to="/signup"><button className="signup">Sign Up</button></Link></li>
                        <li><Link to="/login"><button className="login">Log In</button></Link></li>
                    </ul> 
                </div>

                <Sidebar /> 

                <div className="jbops">
                    <JbopsContainer /> 
                </div> 
            </div>
            )}
    
        const loggedInUI = () => {
            return(
            <div className="splash logged-in">
                <div className="navbar logged-in">
                    <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
                </div>

                <Sidebar />

                <div className="jbops">
                    <JbopsContainer /> 
                    <div>hi</div>
                </div>
            </div>
            )}
       
        return (
            this.props.currentUser ? loggedInUI() : sessionLinks()
        )
    }
}