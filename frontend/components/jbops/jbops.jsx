import React from 'react';
import PlaylistContainer from '../playlists/playlist_container';

export default class Jbops extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        // const loggedIn = () => (
        //     <div className="playlists">
        //         <h1>this will be overarching component</h1>
        //         <div className="user-playlists">user playlists go here</div>
        //         <div className="top-playlists"><PlaylistContainer /></div>
        //     </div>
        // )

        // const loggedOut = () => (
        //     <div className="playlists">
        //         <h1>please sign up or log in</h1>
        //         <h1>this will be overarching component</h1>
        //         <div className="top-playlists"><PlaylistContainer /></div>
        //     </div>
        // )

        let header;

        if (this.props.currentUser) {
            header = (<h1>Welcome, {this.props.currentUser.username}</h1>)
        } else {
            header = (<h1>please sign up or log in</h1>)
        }


        return (
            // this.props.currentUser ? loggedIn() : loggedOut() 
            <div className="playlists">
                {header}
                <PlaylistContainer />
            </div>
        )
    }
}



<div className="playlists">
    <h1></h1>
    <h1></h1>
    <PlaylistContainer /> 
</div>