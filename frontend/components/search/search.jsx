import React from 'react';
import {connect} from 'react-redux'
import Sidebar from '../splash/sidebar';
import HistoryButtons from '../splash/history_buttons';
import UserDropdown from '../splash/user_dropdown';
import {logout} from "../../actions/session_actions";

// high level strategy:
// if the state of search component is searching: render the current results 
// else: render recent searches, top genres and browse all 

class Search extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div className="background">
                    <div className="navbar logged-in">
                        <HistoryButtons />
                        <div className="searchbar">this will be the search bar</div>
                        <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
                    </div>
                    <div className="current-search">
                        <div className="recent-searches">
                            recent searches component goes here
                        </div>
                        <div className="top-genres">
                            top genres component goes here
                        </div>
                        <div className="browse-all">
                            browse all component goes here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentSong: state.session.currentSong,
    songs: state.entities.songs
})

const mdtp = dispatch =>  ({
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(Search);