import React from 'react';
import { connect } from 'react-redux';
import {setCurrentTime, setCurrentProgress} from '../../actions/session_actions'

// export default class Player extends React.Component {
class Player extends React.Component {
    constructor(props) {
        super(props)

        this.songRef = React.createRef();
        this.muteRef = React.createRef();
        this.volumeRef = React.createRef();
        this.currentTimeRef = React.createRef();

        this.state = {
            // currentSong: this.props.currentSong,
            duration: 0.0,
            // currentTime: 0.0,
            progress: 0,
            playStatus: false,
            volume: 50,
            prevVolume: 0,
            muted: false
        }

        this.handlePlay = this.handlePlay.bind(this)
        this.muteSound = this.muteSound.bind(this)
        this.changeVolume = this.changeVolume.bind(this)
        this.playPause = this.playPause.bind(this)
        this.updateCurrentTime = this.updateCurrentTime.bind(this)
        this.changeCurrentTime = this.changeCurrentTime.bind(this)
        this.onComplete = this.onComplete.bind(this)
        this.setCurrentTime = this.setCurrentTime.bind(this)
    }

    //
    setCurrentTime() {
        this.songRef.current.currentTime = this.props.currentTime
    }
    //

    componentWillUnmount() {
        this.props.setCurrentTime(this.songRef.current.currentTime) 
        this.props.setProgress(this.state.progress)
    }

    updateCurrentTime(e){
        this.setState({ progress: this.songRef.current.currentTime / this.songRef.current.duration * 100})  
    }

    
    changeCurrentTime(e) {
        this.songRef.current.currentTime = (e.currentTarget.value / 100 * this.songRef.current.duration)
    }

    handlePlay(){
        if (this.songRef.current.paused) {
            this.songRef.current.play();
            this.setState({ playStatus: true })
        } else {
            this.songRef.current.pause();
            this.setState({ playStatus: false})
        }
    }

    muteSound (e) {
        if (this.state.muted) {
            this.setState({volume: this.state.prevVolume, muted: false})
            this.songRef.current.volume = (this.state.prevVolume/100)
        } else {
            this.setState({volume: 0, prevVolume: this.state.volume, muted: true})
            this.songRef.current.volume = 0 
        }
    }
    
    changeVolume (e) {
        this.setState({volume: e.currentTarget.value})
        this.songRef.current.volume =  (this.volumeRef.current.value / 100) 
    }
    
    playPause(e) {
        this.setState({playStatus: true})
    }

    onComplete(e) {
        this.setState({playStatus: false, currentTime: 0})
    }
    
    render() {
        let currentSongTitle = ""
        let currentSong = ""
        let currentSongId = 0
        let playPause;
        let currentSongArtist =  ""
        let currentSongSrc="";

        if (this.props.currentSong && this.props.currentUser) {
            currentSong = this.props.currentSong
            currentSongTitle = this.props.currentSong.song_title
            currentSongId = this.props.currentSong.id
            currentSongArtist = this.props.currentSong.artist.name
            currentSongSrc = this.props.currentSong.album.artwork
        } 

        if (!this.state.playStatus) {
                playPause = <i onClick={this.handlePlay} 
                    className="fa fa-play-circle" 
                    aria-hidden="true" 
                    id="play_circle"></i>
            }
        else {
            playPause = <i onClick={this.handlePlay}
                className="fa fa-pause-circle" 
                aria-hidden="true"
                id="pause_circle"></i>
        }

        return(
            this.props.currentUser ? 
            <div className="player">
                <audio onLoadedMetadata={this.setCurrentTime} key={currentSongId} ref={this.songRef} autoPlay onPlay={this.playPause} onEnded={this.onComplete} onTimeUpdateCapture={this.updateCurrentTime} onTimeUpdate={this.updateCurrentTime}>
                    <source src={currentSong.musicUrl} type="audio/mpeg"/>
                </audio>

                <div className="left">
                    <img id="track_img" src={currentSongSrc}></img>

                    <div className="track_info">
                        <a href="#" className="track_name">
                            {currentSongTitle}
                        </a>

                        <a href="#" className="track_artist">
                            {currentSongArtist}
                        </a>
                    </div>
                </div>

                <div className="center">
                        <div className="controls">
                            <svg role="img" id="shuffle" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
                                <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z" fill="%23b3b3b3"></path>
                            </svg>
                            
                            <svg role="img" id="step-backward" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
                                <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" fill="%23b3b3b3"></path>
                            </svg>

                            {playPause}
                        
                            <svg role="img" id="step-forward" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
                                <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" fill="%23b3b3b3"></path>
                            </svg>

                            <svg role="img" id="repeat" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
                                <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z" fill="%23b3b3b3"></path>
                            </svg>
                        </div>
                        <input className="currentTime" type="range" min="0" max="99.99" ref={this.currentTimeRef} value={this.state.progress} onChange={this.changeCurrentTime}/>
                </div>

                <div className="right">
                    <i className="fa fa-volume-up" id="volume_icon" aria-hidden="true" onClick={this.muteSound} ref={this.muteRef}></i>
                    <input className="volume" type="range" min="0" max="100"  ref={this.volumeRef} value={this.state.volume} onChange={this.changeVolume} />
                </div>
            </div>
            : null
        )
    }
}

// new code to refactor this.props.currentSong
const mstp = state => ({
    currentSong: state.session.currentSong,
    currentTime: state.session.currentTime,
    currentUser: state.entities.users[state.session.currentUserId]
})

const mdtp = dispatch => ({
    setCurrentTime: (time) => dispatch(setCurrentTime(time)),
    setProgress: (progress) => dispatch(setCurrentProgress(progress))
})

export default connect(mstp, mdtp)(Player);