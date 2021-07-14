import React from 'react';
import {Link} from 'react-router-dom'


export default class Playlist extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPlaylists();
        this.props.getSongs()
    }

    render() {
        let currentUser = null 
        let default_playlists = [] ; 
        let user_playlists = []

        if (this.props.currentUser) {
            currentUser = this.props.currentUser
        }

        if (this.props.playlists) {
            default_playlists = this.props.playlists.filter(playlist => playlist.user_id == 0)
        }   

        if (currentUser) {
            user_playlists = this.props.playlists.filter(playlist => playlist.user_id == currentUser.id)
        }



        const default_playlist_row = () => (
            default_playlists.map(playlist => (
                <li key={playlist.id}>
                    <Link to={this.props.currentUser ? `/playlist/${playlist.id}` : "/login"}>
                        <div className="block">
                            <img src={playlist.artUrl} />
                            <div className="title">
                                {playlist.playlist_name}
                            </div>
                        </div>
                    </Link>
                </li>)))

        const user_playlist_row = () => (
            user_playlists.map(playlist => (
                <li key={playlist.id}>
                    <Link to={this.props.currentUser ? `/playlist/${playlist.id}` : "/login"}>
                        <div className="block">
                            <img src={playlist.artUrl} />
                            <div className="title">
                                {playlist.playlist_name}
                            </div>
                        </div>
                    </Link>
                </li>
            ))
        )
                        

        console.log(this.props.currentUser)
        return (
            <div className="homepage">
                <ul className="playlist_row">
                    {default_playlist_row()}    
                    {user_playlist_row()}
                </ul>
            </div>
        )
}}