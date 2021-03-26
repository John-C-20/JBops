import React from 'react' 

export default class Song extends React.Component {
    constructor(props) {
        super(props)
        
        this.songObj = this.props.song
        // this.songRef = React.createRef()
        this.state = {
            duration: ""
        }

        this.updateDuration = this.updateDuration.bind(this)
    }

    updateDuration(e) {
        const duration = this.convertSeconds(Math.floor(e.target.duration))
        this.setState({duration: duration})
    }

    convertSeconds(seconds) {
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes / 60);
        minutes = minutes % 60 
        seconds = seconds % 60
        
        if (minutes < 10) { 
            minutes = `0${minutes}`
        } else {
            minutes = `${minutes}`
        }

        if (seconds < 10) { 
            seconds = `0${seconds}`
        } else {
            seconds = `${seconds}`
        }

        return(
            hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
        )
    }

    render() {        
        return(
            <ul className="song">

                <li id="song_play">
                    {/* <i className="fa fa-play-circle" aria-hidden="true" id="play_circle"> </i> */}

                    <img src={this.songObj.album.artwork} />
                    <li className="track_info">
                        <div className="track_name">
                            {this.songObj.song_title}
                        </div>
                        <a href="#" className="track_artist gray14px">
                            {this.songObj.artist}
                        </a>
                    </li>
                </li>

                <li>
                    <a href="#" className="gray14px">
                        {this.songObj.album.album_title}
                    </a>
                </li>

                <li>
                    <a href="#" className="gray14px">
                        {this.songObj.album.album_year}
                    </a>
                </li>

                <li className="gray14px"id="track_duration">
                    {this.state.duration}
                </li>

                <audio key={this.songObj.id} onLoadedMetadata={this.updateDuration}>
                    <source src={this.songObj.musicUrl} type="audio/mpeg" />
                </audio>
                
            </ul>
        )
    }
}