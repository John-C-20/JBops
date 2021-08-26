import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import PlaylistLinks from '../playlists/playlist_links';
import {withRouter} from 'react-router-dom';
import {fetchPlaylists, fetchPlaylist, createPlaylist} from '../../actions/playlist_actions';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.props.currentUser ? this.currentUserID = this.props.currentUser.id : null
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.createPlaylist({ playlist: { playlist_name: `My Playlist #${this.props.userPlaylists.length + 1}`, user_id: this.currentUserID } })
        .then((playlist)=> {
        this.props.history.push(`/playlist/${playlist.playlist.id}`)})        
    }

    componentDidMount() {
        this.props.getPlaylists()
    }

    render(){
        return(
            <div className="sidebar">
                <ul>
                    <li><img className="logo" src={window.logoUrl} /></li>
                    <li>
                        <Link to="/">
                            <svg viewBox="0 0 512 512" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path>
                            </svg>
                            <div>Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z" fill="currentColor"></path>
                            </svg>
                            <div>Search</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path>
                            </svg>
                            <div>Your Library</div>
                        </Link>
                    </li>
                    <br/>
                    <li>
                        <a onClick={this.handleClick}>
                            <div className="create-wrapper">
                                <svg role="img" height="12" width="12" viewBox="0 0 16 16" className="Svg-ulyrgf-0 dIsYZz">
                                    <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
                                    <path fill="none" d="M0 0h16v16H0z"></path>
                                </svg>
                            </div>
                            <span>Create Playlist</span>
                        </a>
                    </li>
                    <br/>
                    <PlaylistLinks />
                </ul>
            </div>
        )
    }
}

const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    userPlaylists: Object.values(state.entities.playlists).filter(playlist => playlist.user_id == state.session.currentUserId)
})

const mdtp = dispatch => ({
    getPlaylists: () => dispatch(fetchPlaylists()),
    getPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    createPlaylist: (data) => dispatch(createPlaylist(data)),
})

export default withRouter(connect(mstp, mdtp)(Sidebar));