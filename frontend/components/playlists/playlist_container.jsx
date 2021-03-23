import {connect} from 'react-redux'; 
import Playlist from './playlist'; 
import {fetchPlaylists} from '../../actions/playlist_actions';


const mstp = state => ({
    currentUser:  state.entities.users[state.session.currentUserId],
    playlists: Object.values(state.entities.playlists)

})

const mdtp = dispatch => {
    return {
    getPlaylists: () => dispatch(fetchPlaylists())
}}


export default connect(mstp, mdtp)(Playlist); 
