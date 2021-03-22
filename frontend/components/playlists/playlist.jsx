import React from 'react';
import SongContainer from '../songs/song_container';


export default class Playlist extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const loggedIn = () => (
            <div>
                <div> hehe hoho this will be a playlist component </div>
                <div> it will contain main song components </div>
                <SongContainer />
            </div>
        )

        const loggedOut = () => (
            <div>
                <div> hehe hoho this will be a playlist component but u need to sign in</div>
                <div> it will contain main song components but u need to sign in </div>
                <SongContainer />
            </div>
        )

        return (
            this.props.currentUser ? loggedIn() : loggedOut() 
        )
    }
}