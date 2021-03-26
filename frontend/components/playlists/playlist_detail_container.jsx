import {connect} from 'react-redux'
import PlaylistDetail from './playlist_detail'; 
import {fetchPlaylist} from '../../actions/playlist_actions'
import {logout, setCurrentTime} from '../../actions/session_actions'
import { fetchSong } from '../../actions/song_actions'



const mstp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentSong: state.session.currentSong,
    playlist: state.entities.playlists[ownProps.match.params.playlistId]
})

const mdtp = dispatch => ({
    getPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    fetchSong: songId => dispatch(fetchSong(songId)),
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(PlaylistDetail)