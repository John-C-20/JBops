import React from 'react';
import MenuRow from './menu_row';

class PlaylistMenu extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        const playlistRows = 
            this.props.userPlaylists.map(playlist => 
                <MenuRow type="playlist" text={playlist.playlist_name} border=""/>
            )

        return (
            <ul>
                {playlistRows}
            </ul>
        )
    }
}

const mstp = state => ({
    userPlaylists: Object.values(state.entities.users[state.session.currentUserId].playlists)
})
const mdtp = dispatch => ({})
export default connect(mstp, mdtp)(PlaylistMenu);