import React from 'react'
import {Link} from 'react-router-dom'; 

export default class Splash extends React.Component {
    constructor (props) {
        super(props)
    }

    
    render() {
        const sessionLinks = () => {
            return(
            <div> 
                <Link to="/signup">Sign Up!</Link>
                <br />
                <Link to="/login">Login</Link>
            </div>)
        }
    
        const personalGreeting = () => {
            return(
            <div>
                <h2>hello {this.props.currentUser.username}</h2>
                <br />
                <button onClick={this.props.logout}>Log Out</button>
            </div>)
        }
       
        return (
            this.props.currentUser ? personalGreeting() : sessionLinks()
            )
    }
}