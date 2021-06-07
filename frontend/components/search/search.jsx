import React from 'react';
import {connect} from 'react-redux'
import Sidebar from '../splash/sidebar';
import HistoryButtons from '../splash/history_buttons';
import UserDropdown from '../splash/user_dropdown';
import {logout} from "../../actions/session_actions";
import CurrentSearch from './currentSearch';

// high level strategy:
// if the state of search component is searching: render the current results 
// else: render recent searches, top genres and browse all 

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            results: {}
        }   
        
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        this.setState({text: e.currentTarget.value})
        let title = this.state.text
        $.ajax({
            method: 'GET',
            url: '/api/searches/',
            data: { title }
        }).then(res => this.setState({ results: res }))
    } 

    render(){
        return(
            <div className="splash logged-in">
                <Sidebar/>
                
                <div className="navbar logged-in">
                    <HistoryButtons />
                    <div className="searchbar">
                        <input type="text" onChange={this.handleSearch}/>
                    </div>
                    <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
                </div>
                <div className="current-search">
                    <CurrentSearch text={this.state.text} results={this.state.results}/>
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