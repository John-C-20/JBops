import React from 'react' 

export default class Song extends React.Component {
    constructor(props) {
        super(props)
        
        this.songObj = this.props.song
    }

    
    render() {
        return(
            <div className="song">
                <i className="fa fa-play-circle" aria-hidden="true" id="play_circle"> </i>
                <p>{this.songObj.song_title}</p>
            </div>
        )
    }
}