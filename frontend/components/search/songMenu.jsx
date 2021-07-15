import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class SongMenu extends React.Component {
    constructor(props){
        super(props)
        this.choosePlaylist = this.choosePlaylist.bind(this)
    }

    choosePlaylist(){
        return;
    }

    render(){
        return(
            this.props.open ? 
            <div id="songMenu" className="songMenu">
                <div>Add to queue</div>
                <div>Go to Artist</div>
                <div>Go to Album</div>
                <div onClick={this.choosePlaylist}>Add to Playlist</div>
            </div> :
            null
        )
    }
}

const mstp = state => ({

})

const mdtp = dispatch => ({

})

export default connect(mstp, mdtp)(SongMenu);