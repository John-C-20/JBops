import React from 'react' 

export default class Song extends React.Component {
    constructor(props) {
        super(props)
        

        this.songObj = this.props.song
        this.fetchSong = this.props.fetchSong

        // this.handleClick = this.handleClick.bind(this)

    }

    // handleClick(e) {
    //     debugger
    //     this.fetchSong(this.songObj.id)
    //     // onclick, dispatches an action to update the state.session.currentSong
    // }
    
    render() {
        return(
            <div className="song">
                {/* <button onClick={this.handleClick}> */}
                {/* <button> */}
                    <i className="fa fa-play-circle" aria-hidden="true" id="play_circle"> </i>
                {/* </button> */}
                <p>{this.songObj.song_title}</p>
            </div>
        )
    }
}