import React from 'react';
import {connect} from 'react-redux';

export default class CurrentSearch extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.text)
        let result =  this.props.results
        console.log('result', result)
        let result2 =  Object.values(result)
        console.log('result2', result2)
        let result3 =  result2.map((obj, idx) =>  <li key={idx}>{Object.values(obj)[1]}</li>)


        let songs = result2.filter(obj => obj.type === 'song')
        let songResults = songs.map((obj, idx) => <li key={idx}>{Object.values(obj)[1]}</li>)
        let playlists = result2.filter(obj => obj.type === 'playlist')
        let playlistResults = playlists.map((obj, idx) => <li key={idx}>{Object.values(obj)[1]}</li>)
        let albums;
        let artists; 
        // let result3 = Object.values(Object.values(result2)[0])[1]
        console.log('result3', result3)
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