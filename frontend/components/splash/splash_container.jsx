import {connect} from 'react-redux';
import Splash from './splash';
import {logout} from "../../actions/session_actions";
import { fetchSongs } from '../../actions/song_actions'

const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    songs: state.entities.songs
})

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSongs: () => dispatch(fetchSongs())
})

export default connect(mstp, mdtp)(Splash); 