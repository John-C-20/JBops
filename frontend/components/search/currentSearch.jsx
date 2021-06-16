import React from 'react';
import {connect} from 'react-redux';
import SongResult from './songResult';

export default class CurrentSearch extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.text)
        console.log(this.props.results)

        let result =  Object.values(this.props.results)

        let songs = result.filter(obj => obj.type === 'song')
        let songResults = songs.map((song, idx) => 
                <button className="song" key={idx} onClick={() => this.props.fetchSong(song.id)}>
                    <SongResult song={song} ord={idx} />
                </button>
            )

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

        let artists = result.filter(obj => obj.type === 'artist')
        let artistResults = artists.map((artist, idx) => 
            <li key={idx}>
                <div className="block">
                    <img src="https://ik.imagekit.io/afkmedia/tr:w-375,h-250/media/images/83570-963fd2981d42ce32d196e3d42a25fd45.jpeg" />
                    <div className="title">
                        {artist.name}
                    </div>
                </div>
            </li>)
        let albums = result.filter(obj => obj.type === 'album')
        let albumResults = albums.map((album, idx) => 
            <li key={idx}>
                <div className="block">
                    <img src={album.artwork}/>
                    <div className="title">
                        {album.album_title}
                    </div>
                </div>
            </li>)


        console.log('albumResults', albumResults)
        console.log('songs', songs)
        console.log('songresults', songResults)
        console.log('playlistResults', playlistResults)
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

                {artistResults.length > 0 ? 
                <div>
                <div className="header">Artists</div>
                <ul className="artist-results">
                    {artistResults}
                </ul>
                </div> 
                : null }

                {albumResults.length > 0 ? 
                <div>
                <div className="header">Albums</div>
                <ul className="album-results">
                    {albumResults}
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