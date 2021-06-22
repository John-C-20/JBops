import {connect} from 'react-redux';
import React from 'react' ;
import Sidebar from '../splash/sidebar';
import Song from '../songs/song';
import HistoryButtons from "../splash/history_buttons"; 
import UserDropdown from '../splash/user_dropdown';
import Player from '../player/player';

class GenreDetail extends React.Component{
    constructor(props) {
        super(props) 
        this.state = { 
            songs: []
        }
    }

    componentDidMount() {
        $.ajax({
            method: 'GET',
            url: `/api/genres/${this.props.location.pathname.split('/').pop()}`
        }).then(res => this.setState({songs: Object.values(res)}))
    }

    render(){
        let genre = [];
        let songRows = this.state.songs.map((song, idx) => 
            <button className="song" key={idx} onClick={() => this.props.fetchSong(song.id)}>
                <Song song={song}/> 
            </button>
        )
        let artwork = "" 
    
        console.log('this.state.songs:', this.state.songs)

        


        return(
            <div className="splash logged-in">
                <div className="navbar logged-in">
                    <HistoryButtons /> 
                    <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} /> 
                </div>
                <Sidebar /> 

                <div className="jbops">
                    <div className="header">
                        <div className="text">
                            <h1>{this.props.location.pathname.split('/').pop()}</h1>
                            <div id="num_songs">
                                {`${songRows.length} songs`}
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="grid">
                        <ul className="rows">
                            <li id="ord_and_title">
                                <li id="song_ord">

                                </li>
                                <li id="song_title">
                                    TITLE
                                </li>
                            </li>

                            <li id="album_title">ALBUM</li>
                            <li id="album_year">ALBUM YEAR</li>
                            <li id="duration">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill="currentColor"></path>
                                </svg>
                            </li>

                        </ul>

                        {songRows}
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentSong: state.session.currentSong
})

const mdtp = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(GenreDetail)