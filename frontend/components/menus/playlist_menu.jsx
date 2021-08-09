import React from 'react';
import { connect } from 'react-redux';
import MenuRow from './menu_row';

export class PlaylistMenu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className="menu-container1" id={`${this.props.playlist.playlist_name}-${this.props.playlist.id}`} >
                <MenuRow playlist={this.props.playlist} type="queuePlaylist" text="Add to Queue" border="bottom" />
                <MenuRow playlist={this.props.playlist} type="delete" text="Delete" border="" />
                <MenuRow playlist={this.props.playlist} type="rename" text="Rename" border="" />
            </ul>
        )
    }
}