import React from 'react';
import MenuRow from './menu_row';
import {connect} from 'react-redux';

class SongMenu extends React.Component{
    constructor(props){
        super(props)

        this.song = this.props.song
    }

    render(){
        return(
            <ul className="menu-container" id={`${this.song.song_title}-${this.song.id}`} >
                <MenuRow song={this.props.song} type="queueSong" text="Add to Queue" border="bottom"/>
                <MenuRow song={this.props.song} type="artist" text="Go to artist" border=""/>
                <MenuRow song={this.props.song} type="album" text="Go to album" border=""/>
                <MenuRow song={this.props.song} playlist={this.props.playlist} getPlaylist={this.props.getPlaylist} type="deleteSong" text="Remove from this playlist" border="" />
                <MenuRow song={this.props.song} type="addToPlaylist" text="Add to playlist" border="" />
            </ul>
        )
    }
}

const mstp = state => ({})
const mdtp = dispatch => ({})
export default connect(mstp,mdtp)(SongMenu);