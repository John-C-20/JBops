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
        let playlists = [] ; 


        if (this.props.playlists) {
            playlists = this.props.playlists
        }   

        const playlist_row = () => (
            playlists.map(playlist => (
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
            )))
                        


        return (
            <div className="homepage">
                <ul className="playlist_row">
                    {playlist_row()}    
                </ul>
            </div>
        )
}}