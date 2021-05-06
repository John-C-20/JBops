import { connect } from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom';

class PlaylistLink extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let playlists = ''
        if (this.props.currentUser) {
            if (this.props.currentUser.playlists) {
                playlists = Object.values(this.props.currentUser.playlists)
                .map((playlist, idx) => 
                <li className="playlist-link" key={idx}>
                    <Link to={`/playlist/${playlist.id}`}>
                        {playlist.playlist_name}
                    </Link>
                </li>)
            }
        }

        return (
            playlists 
        )
    }
}

const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
})


export default connect(mstp, null)(PlaylistLink)

