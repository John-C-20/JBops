import React from 'react';
import {connect} from 'react-redux';
import PlaylistMenu from './playlist_menu';
import { addSongToPlaylist } from '../../util/playlist_song_api_util';

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
            case 'queue':
                // add to queue
                break;
            case 'artist':
                // go to artist if one artist, open menu if 1+ 
                break;
            case 'album':
                // go to album 
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
           <li className={this.props.border ? "menu-row bottom-border-gray" : "menu-row"} onMouseEnter={this.onHover} onMouseLeave={this.unHover} onClick={this.onClick}> 
                {this.props.text}
                {this.props.type=="addToPlaylist" ? 
                <PlaylistMenu song={this.props.song} />
                : null
                }
            </li>
        )
    }
}

const mstp = state => ({})
const mdtp = dispatch => ({})
export default connect(mstp, mdtp)(MenuRow);