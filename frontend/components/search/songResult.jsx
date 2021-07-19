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
        this.onClick = this.onClick.bind(this)
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
    
    onClick(e){
        const songMenus = document.getElementsByClassName("menu-container");
        let j;
        for (j = 0; j < songMenus.length; j++) {
            const menu = songMenus[j];
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        }

        const loc = e.currentTarget.getBoundingClientRect() 
        console.log(loc)
        const menu = document.getElementById(`${this.props.song.song_title}-${this.props.song.id}`)
        menu.style.left = `${loc.x-120}px` 
        menu.style.top = `${loc.y-66}px` 
        this.props.openSongMenu(menu)
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
            <ul className="song song_result" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>

                <li id="song_play">
                    <span>
                        {this.props.ord + 1}
                    </span>
                    <img src={this.songObj.album.artwork} />
                    <div className="track_info">
                        <div className="track_name">
                            {this.songObj.song_title}
                        </div>
                        <a href="#" className="track_artist gray14px">
                            {this.songObj.artist.name}
                        </a>
                    </div>
                </li>

                <li className="gray14px song-result-end" >
                    <div>
                        {this.state.duration}
                    </div>
                    <div className="ellipsis" onClick={this.onClick}>
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </li>

                

                <audio key={this.songObj.id} onLoadedMetadata={this.updateDuration}>
                    <source src={this.songObj.musicUrl} type="audio/mpeg" />
                </audio>

            </ul>
        )
    }
}