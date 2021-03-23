import React from 'react';
import SongContainer from '../songs/song_container';
import {Link} from 'react-router-dom'


export default class Playlist extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPlaylists();
    }

    render() {
        let playlists = [] ; 


        if (this.props.playlists) {
            playlists = this.props.playlists
        }   

        const playlist_row = () => (
            playlists.map(playlist => (
                <Link key={playlist.id} to={this.props.currentUser ? `/playlist/${playlist.id}` : "/login"}>
                    <div className="block">
                        <img src={playlist.artUrl} />
                        <div className="title">
                            {playlist.playlist_name}
                        </div>
                    </div>
                </Link>
            )))
                        


        return (
            <div className="homepage">
                <div className="playlist_row">
                    {playlist_row()}    
                </div>
                <div> hehe hoho this will be a playlist component </div>
                <div> it will contain main song components </div>
            </div>
        )
}}