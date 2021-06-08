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
        let songResults = songs.map((obj, idx) => <li key={idx}>{Object.values(obj)[1]}</li>)
        let playlists = result.filter(obj => obj.type === 'playlist')
        let playlistResults = playlists.map((obj, idx) => <li key={idx}>{Object.values(obj)[1]}</li>)
        let albums;
        let artists; 

        return(
            Object.values(this.props.results).length === 0 ? 
            <div className="results">default state</div> :
            <div className="results">
                <ul className="song-results">{songResults}</ul> 
                <ul className="playlist-results">{playlistResults}</ul>
            </div> 
        )
    }
}