import React from 'react' 
import UserDropdown from '../splash/user_dropdown'
import Sidebar from '../splash/sidebar'
import Player from '../player/player'

export default class PlaylistDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPlaylist(this.props.match.params.playlistId)
    }

    render() {
        let playlist = [];
        let songRows = [];
        
        if (this.props.playlist) {
            playlist = this.props.playlist.playlist_name


            if (this.props.playlist.songs) {
                const songs = Object.values(this.props.playlist.songs) 
                songRows = songs.map(song => <li key={song.id}>{song.song_title}</li>)
            }
        }
        
        return(
                <div className="splash logged-in">
                    <div className="navbar logged-in">
                        <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                    </div>

                    <Sidebar />

                    <div className="jbops">
                        <h1>{playlist}</h1>
                        <h3>Click to add songs to playlist</h3>
                        <ul>
                            {songRows} 
                        </ul>
                    </div>

                    <Player /> 
                </div>
            )}
    }



