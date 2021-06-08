import React from 'react';
import {connect} from 'react-redux';

export default class CurrentSearch extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.text)

        let result =  Object.values(this.props.results)

        let songs = result.filter(obj => obj.type === 'song')
        let songResults = songs.map((song, idx) => 
            <li key={idx}>
                <div className="block">
                    <img src={song.album.artwork} />
                    <div className="title">
                        {song.song_title}
                    </div>
                </div>
            </li>)
        let playlists = result.filter(obj => obj.type === 'playlist')
        let playlistResults = playlists.map((playlist, idx) => 
            <li key={idx}>
                <div className="block">
                    <img src={playlist.artUrl}/>
                    <div className="title">
                        {playlist.playlist_name}
                    </div>
                </div>
            </li>)
        let albums;
        let artists; 

        return(
            Object.values(this.props.results).length === 0 ? 
            <div className="results">
                <div className="recent-searches">
                    recent searches component goes here
                </div>
                <div className="top-genres">
                    top genres component goes here
                </div>
                <div className="browse-all">
                    browse all component goes here
                </div> 
            </div> :
            <div className="results">
                {songResults.length > 0 ? 
                <div>
                <div className="header">Songs</div>
                <ul className="song-results">
                    {songResults}
                </ul>
                </div> 
                : null }

                {playlistResults.length > 0 ?
                <div>
                <div className="header">Playlists</div>
                <ul className="playlist-results">
                    {playlistResults}
                </ul>
                </div> : null }
            </div> 
        )
    }
}