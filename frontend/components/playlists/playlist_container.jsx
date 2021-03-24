import {connect} from 'react-redux'; 
import Playlist from './playlist'; 
import {fetchPlaylists} from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions'


const mstp = state => ({
    currentUser:  state.entities.users[state.session.currentUserId],
    currentSong: state.session.currentSong,
    playlists: Object.values(state.entities.playlists)

})

const mdtp = dispatch => ({
    getSongs: () => dispatch(fetchSongs()),
    getPlaylists: () => dispatch(fetchPlaylists())
})


export default connect(mstp, mdtp)(Playlist); 
