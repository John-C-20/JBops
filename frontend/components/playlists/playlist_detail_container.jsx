import {connect} from 'react-redux'
import PlaylistDetail from './playlist_detail'; 
import {fetchPlaylist} from '../../actions/playlist_actions'
import {logout} from '../../actions/session_actions'




const mstp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    songs: state.entities.songs
})

const mdtp = dispatch => ({
    getPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(PlaylistDetail)