import React from 'react';
import {connect} from 'react-redux'
import Sidebar from '../splash/sidebar';
import HistoryButtons from '../splash/history_buttons';
import UserDropdown from '../splash/user_dropdown';
import {logout} from "../../actions/session_actions";
import CurrentSearch from './currentSearch';
import {fetchSong} from '../../actions/song_actions';

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
        let title = e.currentTarget.value
        $.ajax({
            method: 'GET',
            url: '/api/searches/',
            data: { title }
        }).then(res => {
            console.log("in the promise: ", res)
            this.setState({ results: res })
            console.log("in promise after setState: ", this.state.results)
            }
            )
    } 

    render(){
        console.log("in the render: ", this.state.results)
        return(
            <div className="splash logged-in">
                <Sidebar/>
                
                <div className="navbar logged-in">
                    <HistoryButtons />
                    <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
                </div>
                <div className="searchbar">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input className="search-input" type="text" onChange={this.handleSearch} placeholder="Playlists, artists, albums, or songs"/>
                </div>
                <div className="current-search">
                    <CurrentSearch results={this.state.results} fetchSong={this.props.fetchSong}/>
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
    logout: () => dispatch(logout()),
    fetchSong: songId => dispatch(fetchSong(songId))
})

export default connect(mstp, mdtp)(Search);