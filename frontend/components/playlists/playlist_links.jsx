import { connect } from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom';
import {fetchPlaylists} from '../../actions/playlist_actions';

class PlaylistLink extends React.Component {
    constructor(props) {
        super(props)

    }

    // componentDidMount() {
    //     this.props.getPlaylists()
    // }

    render() {
        let playlists = ''
        if (this.props.currentUserId) {
            // if (this.props.currentUser.playlists) {
                playlists = Object.values(this.props.playlists).filter(playlist => playlist.user_id == this.props.currentUserId)
                .map((playlist, idx) => 
                <li className="playlist-link" key={idx}>
                    <Link to={`/playlist/${playlist.id}`}>
                        {playlist.playlist_name}
                    </Link>
                </li>)
            // }
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
    getPlaylists: () => dispatch(fetchPlaylists())
})

export default connect(mstp, mdtp)(PlaylistLink)

