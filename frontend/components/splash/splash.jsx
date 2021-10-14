import React from 'react'
import {Link} from 'react-router-dom'; 
import UserDropdown from '../navbar/user_dropdown'
import JbopsContainer from '../../components/jbops/jbops_container';
import Sidebar from './sidebar';
import Navbar from '../navbar/navbar'; 
import HistoryButtons from '../navbar/history_buttons';
import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import { fetchSongs } from '../../actions/song_actions';

class Splash extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSongs()
    }
    
    render() {
    //     const sessionLinks = () => {
    //         return(
    //         <div className="splash">
    //             <div className="navbar">
    //                     <HistoryButtons />
    //                 <ul>
    //                     <li><Link to="/signup"><button className="signup">Sign Up</button></Link></li>
    //                     <li><Link to="/login"><button className="login">Log In</button></Link></li>
    //                 </ul> 
    //             </div>

    //             <Sidebar /> 

    //             <div className="jbops">
    //                 <JbopsContainer /> 
    //             </div> 

    //         </div>
    //         )}
    
    //     const loggedInUI = () => {
    //         return(
    //         <div className="splash logged-in">
    //             <div className="navbar logged-in">
    //                 <HistoryButtons />
    //                 <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
    //             </div>

    //             <Sidebar />

    //             <div className="jbops">
    //                 <JbopsContainer /> 
    //             </div>

    //             {/* <Player currentSong={this.props.currentSong}/> */}
    //         </div>
    //         )}
       
    //     return (
    //         this.props.currentUser ? loggedInUI() : sessionLinks()
    //     )
    // }
        return(
            <div className="splash">
                <Navbar /> 
                <Sidebar /> 
                <JbopsContainer /> 
            </div>
        )
    }
}

const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentSong: state.session.currentSong,
    songs: state.entities.songs
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSongs: () => dispatch(fetchSongs())
})

export default connect(mstp, mdtp)(Splash);