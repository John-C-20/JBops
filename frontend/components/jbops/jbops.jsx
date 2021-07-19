import React from 'react';
import PlaylistContainer from '../playlists/playlist_container';

export default class Jbops extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        let header;

        if (this.props.currentUser) {
            header = (<h1>Welcome, {this.props.currentUser.username}</h1>)
        } else {
            header = (<h1>please sign up or log in</h1>)
        }


        return (
            <div className="playlists">
                {header}
                <PlaylistContainer />
            </div>
        )
    }
}


