import React from 'react' 
import SongContainer from '../songs/song_container'
import UserDropdown from '../splash/user_dropdown'

export default class PlaylistDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPlaylist(this.props.match.params.playlistId)
    }

    render() {
        let songs = [];
        let playlist = [];

        if (this.props.playlist) {
            playlist = this.props.playlist
            songs = Object.values(this.props.playlist.songs)
        }

        const songRows = () => (
            songs.map(song => <li key={song.id}>{song.song_title}</li>)
        )

        return(
                <div className="splash logged-in">
                    <div className="navbar logged-in">
                        <UserDropdown logout={this.props.logout} currentUser={this.props.currentUser} />
                    </div>

                    <div className="sidebar">
                        <ul>
                            <li><img className="logo" src={window.logoUrl} /></li>
                            <li> this will be the home button</li>
                            <li> this will be the search component</li>
                            <li>this will be the library button</li>
                        </ul>
                    </div>

                    <div className="jbops">
                        <h1>{playlist.playlist_name}</h1>
                        <ul>
                            {songRows()} 
                        </ul>
                        <SongContainer />
                    </div>
                </div>
            )}
    }



