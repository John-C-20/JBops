import React from 'react'
import {Link} from 'react-router-dom'; 
import UserDropdown from './user_dropdown'
import JbopsContainer from '../../components/jbops/jbops_container';
import Sidebar from './sidebar'
import HistoryButtons from './history_buttons';

export default class Splash extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSongs()
    }
    
    render() {
        const sessionLinks = () => {
            return(
            <div className="splash">
                <div className="navbar">
                    <ul>
                        <li><HistoryButtons /></li>
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
                    <HistoryButtons />
                    <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
                </div>

                <Sidebar />

                <div className="jbops">
                    <JbopsContainer /> 
                </div>

                {/* <Player currentSong={this.props.currentSong}/> */}
            </div>
            )}
       
        return (
            this.props.currentUser ? loggedInUI() : sessionLinks()
        )
    }
}