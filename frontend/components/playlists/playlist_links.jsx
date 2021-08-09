import { connect } from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom';
import {fetchPlaylists, deletePlaylist} from '../../actions/playlist_actions';
import {PlaylistMenu} from '../menus/playlist_menu';

class PlaylistLink extends React.Component {
    constructor(props) {
        super(props)
        this.onRightClick = this.onRightClick.bind(this);
    }

    onRightClick(playlist) {
        return e => {
            const playlistMenus = document.getElementsByClassName("menu-container1");
            let k;
            for (k = 0; k < playlistMenus.length; k++) {
                const menu = playlistMenus[k];
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
            }

            const element = document.getElementById(`${playlist.playlist_name}-${playlist.id}`)
            element.style.left = `${e.pageX}px`
            element.style.top = `${e.pageY}px`
            element.classList.add("show")
        }
    }

    render() {
        let playlists = ''
        if (this.props.currentUserId) {
                playlists = Object.values(this.props.playlists).filter(playlist => playlist.user_id == this.props.currentUserId)
                .map((playlist, idx) => 
                <li className="playlist-link" key={idx}>
                    <Link to={`/playlist/${playlist.id}`} className="boop" onContextMenu={this.onRightClick(playlist)}>
                        {playlist.playlist_name}
                    </Link>
                    <PlaylistMenu playlist={playlist}/>
                </li>)
        }

        return (
            playlists 
        )
    }
}

const mstp = state => ({
    currentUserId: state.session.currentUserId,
    playlists: state.entities.playlists
})

const mdtp = dispatch => ({
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))

})

export default connect(mstp, mdtp)(PlaylistLink)

