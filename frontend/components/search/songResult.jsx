import React from 'react';
import SongMenu from '../menus/song_menu';

export default class SongResult extends React.Component {
    constructor(props) {
        super(props)

        this.songObj = this.props.song
        this.state = {
            duration: ""
        }

        this.updateDuration = this.updateDuration.bind(this)
        this.onRightClick = this.onRightClick.bind(this)
        this.onClick = this.onClick.bind(this)
        this.openSongMenu = this.openSongMenu.bind(this)
    }

    updateDuration(e) {
        const duration = this.convertSeconds(Math.floor(e.target.duration))
        this.setState({ duration: duration })
    }

    onMouseOver(e){
        const ul = e.currentTarget 
        const li = ul.children[1]
        const ellipsis = li.querySelector(".fa-ellipsis-h").style.visibility ="visible" 
    }

    onMouseLeave(e){
        const ul = e.currentTarget
        const li = ul.children[1]
        const ellipsis = li.querySelector(".fa-ellipsis-h").style.visibility = "hidden"
    }
    
    onRightClick(e) {
    }
    
    onClick(e){
    }

    openSongMenu(){
    }


    convertSeconds(seconds) {
        let minutes = Math.floor(seconds / 60);
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

        return (
            hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
        )
    }

    render() {
        return (
            <ul className="song song_result" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} onMous>

                <li id="song_play">
                    <span>
                        {this.props.ord + 1}
                    </span>
                    <img src={this.songObj.album.artwork} />
                    <li className="track_info">
                        <div className="track_name">
                            {this.songObj.song_title}
                        </div>
                        <a href="#" className="track_artist gray14px">
                            {this.songObj.artist.name}
                        </a>
                    </li>
                </li>

                <li className="gray14px song-result-end" >
                    <div>
                        {this.state.duration}
                    </div>
                    <div className="song-menu">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        <SongMenu /> 
                    </div>
                </li>

                

                <audio key={this.songObj.id} onLoadedMetadata={this.updateDuration}>
                    <source src={this.songObj.musicUrl} type="audio/mpeg" />
                </audio>

            </ul>
        )
    }
}