import React from 'react';
import {connect} from 'react-redux';
import PlaylistsMenu from './playlists_menu';
import {deletePlaylist} from '../../actions/playlist_actions';
import {queueSong, queuePlaylist} from '../../actions/queue_actions';
import { removeSongFromPlaylist } from '../../util/playlist_song_api_util';
import { addSongToPlaylist } from '../../util/playlist_song_api_util';
import {withRouter} from 'react-router-dom';

class MenuRow extends React.Component{
    constructor(props){
        super(props)

        this.onHover = this.onHover.bind(this)
        this.unHover = this.unHover.bind(this)
        this.onClick = this.onClick.bind(this)
        this.openSongMenu = this.openSongMenu.bind(this)
        this.closeSongMenu = this.closeSongMenu.bind(this)
    }

    openSongMenu(element) {
        element.classList.add("show")
    }

    closeSongMenu(element) {
        element.classList.remove("show")
    }

    onHover(){
        switch (this.props.type) {
            case 'artist':
                // open artist menu if more than one artist
                break;
            case 'addToPlaylist':
                const element = document.getElementById(`${this.props.song.song_title}-${this.props.song.id}-add`)
                this.openSongMenu(element)
                break;
            default:
                return;
        }
    }

    unHover(){
        switch (this.props.type) {
            case 'artist':
                // close menu 
                break;
            case 'addToPlaylist':
                const element = document.getElementById(`${this.props.song.song_title}-${this.props.song.id}-add`)
                this.closeSongMenu(element)
                break;
            default:
                return;
        }
    }

    onClick(){
        switch (this.props.type) {
            case 'queueSong':
                this.props.queueSong(this.props.song.id)
                break;
            case 'queuePlaylist':
                this.props.queuePlaylist(this.props.playlist.id)
                break;
            case 'artist':
                // go to artist if one artist, open menu if 1+ 
                break;
            case 'album':
                // go to album show page 
                break;
            case 'deletePlaylist':
                const playlistId = this.props.location.pathname.split("/").pop()
                if (playlistId == this.props.playlist.id) {this.props.history.push('/')}
                this.props.deletePlaylist(this.props.playlist.id)
                break;
            case 'deleteSong' : 
                $.ajax({
                    method: 'GET',
                    url: '/api/playlist_songs',
                    data: {playlistId: this.props.playlist.id, songId: this.props.song.id}
                }).then(res => {
                    res.forEach ( playlistSong => removeSongFromPlaylist(playlistSong.id))
                    this.props.getPlaylist(this.props.playlist.id)
                })
                break;
            case 'rename':
                // rename playlist 
                break;
            case 'playlist':
                addSongToPlaylist(this.props.song.id, this.props.playlist.id)
                break;
            case 'addToPlaylist':
                const element = document.getElementById(`${this.props.song.song_title}-${this.props.song.id}-add`)
                this.openSongMenu(element)
                break;
            default:
                return;
        }
    }

    render(){
        return(
            (this.props.type === "deleteSong") && (!this.props.playlist) ?  
            null : 
           <li className={this.props.border ? "menu-row bottom-border-gray" : "menu-row"} onMouseEnter={this.onHover} onMouseLeave={this.unHover} onClick={this.onClick}> 
                {this.props.text}
                {this.props.type=="addToPlaylist" ? 
                <PlaylistsMenu song={this.props.song} />
                : null
                }
            </li>
        )
    }
}

const mstp = state => ({})
const mdtp = dispatch => ({
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    queuePlaylist: playlistId => dispatch(queuePlaylist(playlistId)),
    queueSong: songId => dispatch(queueSong(songId)),
    removeSongFromPlaylist: playlistSongId => dispatch(removeSongFromPlaylist(playlistSongId))
})
export default withRouter(connect(mstp, mdtp)(MenuRow));