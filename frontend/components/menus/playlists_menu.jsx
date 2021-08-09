import React from 'react';
import {connect} from 'react-redux';
import MenuRow from './menu_row';

class PlaylistsMenu extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        const playlistRows = 
            this.props.userPlaylists.map((playlist, idx) => 
                <MenuRow type="playlist" song={this.props.song} playlist={playlist} text={playlist.playlist_name} border="" key={idx}/>
            )

        return (
            <ul className="menu-container" id={`${this.props.song.song_title}-${this.props.song.id}-add`}>
                {playlistRows}
            </ul>
        )
    }
}

const mstp = state => ({
    userPlaylists: Object.values(state.entities.playlists).filter(playlist => playlist.user_id == state.session.currentUserId)
})
const mdtp = dispatch => ({})
export default connect(mstp, mdtp)(PlaylistsMenu);