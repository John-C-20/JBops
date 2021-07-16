import React from 'react';
import MenuRow from './menu_row';

class MenuRow extends React.Component{
    constructor(props){
        super(props)

        this.onHover = this.onHover.bind(this)
        this.unHover = this.unHover.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onHover(){
        switch (this.props.type) {
            case 'artist':
                // open artist menu if more than one artist
                break;
            case 'addToPlaylist':
                // open playlist menu 
                break;
            default:
                return;
        }
    }

    unHover(){
        switch (this.props.type) {
            case 'artist':
                // close menu 
                break;
            case 'addToPlaylist':
                // close menu 
                break;
            default:
                return;
        }
    }

    onClick(){
        switch (this.props.type) {
            case 'queue':
                // add to queue
                break;
            case 'artist':
                // go to artist if one artist, open menu if 1+ 
                break;
            case 'album':
                // go to album 
                break;
            case 'playlist':
                // add song to clicked playlist and close all menus
                break;
            case 'addToPlaylist':
                // return 
                break;
            default:
                return;
        }
    }

    render(){
        return(
           <li className={this.props.border ? "menu-row bottom-border-gray" : "menu-row"} onMouseEnter={this.onHover} onMouseLeave={this.unHover} onClick={this.onClick}> 
                {this.props.text}
            </li>
        )
    }
}

const mstp = state => ({})
const mdtp = dispatch => ({})
export default connect(mstp, mdtp)(MenuRow);