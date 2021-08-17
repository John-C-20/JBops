import React from 'react' 
import UserDropdown from '../splash/user_dropdown'
import Sidebar from '../splash/sidebar'
import Song from '../songs/song'
import HistoryButtons from "../splash/history_buttons";
import SongMenu from '../menus/song_menu';
import Modal from "./modal";

export default class PlaylistDetail extends React.Component {
    constructor(props) {
        super(props)
        // this.fetchSong = this.props.fetchSong
        this.fetchSong = this.props.playSong
        this.queuePlaylist = this.props.queuePlaylist 
        this.queueSong = this.props.queueSong
        this.onDoubleClick = this.onDoubleClick.bind(this)
        this.playSong = this.playSong.bind(this)
        this.queuePlaylist = this.queuePlaylist.bind(this)
    }

    componentDidMount() {
        this.props.getPlaylist(this.props.match.params.playlistId)
    }

    onDoubleClick(song){
        return () => {
            // this.playSong(song.id)
            this.queuePlaylist(this.props.playlist.id, song)
        }
    }

    playSong(songId){
        this.fetchSong(songId)
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

    render() {
        let playlist = [];
        let songRows = [];
        let artwork = ""
        if (this.props.playlist) {
            playlist = this.props.playlist.playlist_name
            artwork = this.props.playlist.artUrl
            if (this.props.playlist.songs) {
                const songs = Object.values(this.props.playlist.songs)            
                songRows = songs.map(song => {
                    return (
                        <button className="song" key={song.id} onDoubleClick={this.onDoubleClick(song)} onContextMenu={this.onRightClick(song)}>
                        <Song song={song} openSongMenu={this.openSongMenu}/>
                        <SongMenu song={song} />
                    </button>
                    )
                })
            }
        }
    
        return(
                <div className="splash logged-in">
                    <div className="navbar logged-in">
                        <HistoryButtons />
                        <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                    </div>
                    <Sidebar />
                    <div className="jbops">                
                        <div className="header">
                            <div id="playlist_img">
                                <img src={artwork} />
                            </div>
                            <div className="text">
                                <h2>Playlist</h2>
                                {this.props.playlist && (this.props.playlist.user_id == this.props.currentUser.id) ? 
                                <h1 className="playlist-name" onClick={this.props.toggleModal}>{playlist}</h1> :
                                <h1>{playlist}</h1> 
                                }
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
            )}
    }



