import React from 'react'
import {Link} from 'react-router-dom'; 
import UserDropdown from './user_dropdown'
import JbopsContainer from '../../components/jbops/jbops_container';

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

                <div className="sidebar">
                    <ul>
                        <li><img className="logo" src={window.logoUrl} /></li>
                        <li> this will be the home button</li>
                        <li> this will be the search component</li>
                        <li>this will be the library button</li>
                    </ul>
                </div>

                <div className="jbops">
                    <JbopsContainer /> 
                </div> 
            </div>
            )}
    
        const loggedInUI = () => {
            return(
            // <div>
            //     <h2>hello {this.props.currentUser.username}</h2>
            //         <p>DOB: {this.props.currentUser.dob_month}-{this.props.currentUser.dob_day}-{this.props.currentUser.dob_year}</p>
            //     <p>gender: {this.props.currentUser.gender}</p>
            //     <button onClick={this.props.logout}>Log Out</button>
            // </div>)
            <div className="splash logged-in">
                <div className="navbar logged-in">
                    <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
                </div>

                <div className="sidebar">
                    <ul>
                        <li><img className="logo" src={window.logoUrl} /></li>
                        <li> this will be the home button</li>
                        <li> this will be the search component</li>
                        <li>this will be the library button</li>
                    </ul>
                </div>

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