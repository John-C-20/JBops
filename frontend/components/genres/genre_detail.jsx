import {connect} from 'react-redux';
import React from 'react' ;
import Sidebar from '../splash/sidebar';
import Song from '../songs/song';
import HistoryButtons from "../navbar/history_buttons"; 
import UserDropdown from '../navbar/user_dropdown';
import SongMenu from '../menus/song_menu';
import {playSong} from '../../actions/queue_actions';

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

    openSongMenu(element) {
        element.classList.add("show")
    }
    onRightClick(song) {
        return e => {
            const songMenus = document.getElementsByClassName("menu-container");
            let j;
            for (j = 0; j < songMenus.length; j++) {
                const menu = songMenus[j];
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
            }

            const element = document.getElementById(`${song.song_title}-${song.id}`)
            element.style.left = `${e.pageX}px`
            element.style.top = `${e.pageY}px`
            this.openSongMenu(element)
        }
    }

    render(){
        let genre = this.props.location.pathname.split('/').pop()
        if (genre === 'HipHop') genre = 'Hip Hop'
        if (genre === 'RnB') genre = 'R&B'

        let songRows = this.state.songs.map((song, idx) => 
            <button className="song" key={idx} onDoubleClick={() => this.props.playSong(song.id)} onContextMenu={this.onRightClick(song)}>
                <Song song={song} openSongMenu={this.openSongMenu}/>
                <SongMenu song={song}/>
            </button>
        )
        let artwork = "" 

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
                            <h1>{genre}</h1>
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
    playSong: songId => dispatch(playSong(songId)),
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(GenreDetail)