import React from 'react';
import MenuRow from './menu_row';

class SongMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className="menu-container">
                <MenuRow type="queue" text="Add to Queue" border="bottom"/>
                <MenuRow type="artist" text="Go to artist" border=""/> 
                <MenuRow type="album" text="Go to album" border=""/>
                <MenuRow type="playlist" text="Add to playlist" border="" /> 
            </ul>
        )
    }
}

const mstp = state => ({})
const mdtp = dispatch => ({})
export default connect(mstp,mdtp)(SongMenu);