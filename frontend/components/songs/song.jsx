import React from 'react' 

export default class Song extends React.Component {
    constructor(props) {
        super(props)
        
        this.songObj = this.props.song
        this.songRef = React.createRef()
    }

    
    render() {
        return(
            <ul className="song">
                <li id="song_play">
                    <i className="fa fa-play-circle" aria-hidden="true" id="play_circle"> </i>
                </li>
                <li id="song_title">{this.songObj.song_title}</li>
                <li id="album_title">{this.songObj.album.album_title}</li>
                <li id="album_year">{this.songObj.album.album_year}</li>
            </ul>
        )
    }
}