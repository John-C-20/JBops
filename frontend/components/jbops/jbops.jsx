import React from 'react';
import PlaylistContainer from '../playlists/playlist_container';

export default class Jbops extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        const loggedIn = () => (
            <div className="playlists">
                <h1>this will be overarching component</h1>
                <div className="user-playlists">user playlists go here</div>
                <div className="top-playlists"><PlaylistContainer /></div>
            </div>
        )

        const loggedOut = () => (
            <div className="playlists">
            <h1>please sign up or log in</h1>
                <div className="top-playlists">
                    <div>
                        top playlists go here but you need to sign it to listen
                    </div>
                    <PlaylistContainer /> 
                </div>
            </div>
        )

        return (
            this.props.currentUser ? loggedIn() : loggedOut() 
        )
    }
}