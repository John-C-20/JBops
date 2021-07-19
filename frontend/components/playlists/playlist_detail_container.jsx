import {connect} from 'react-redux'
import PlaylistDetail from './playlist_detail'; 
import {fetchPlaylist} from '../../actions/playlist_actions'
import {logout, setCurrentTime} from '../../actions/session_actions'
import { fetchSong } from '../../actions/song_actions'
import { queueSong, playSong, queuePlaylist } from '../../actions/queue_actions';
import { toggleModal } from '../../actions/modal_actions';



const mstp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentSong: state.session.currentSong,
    playlist: state.entities.playlists[ownProps.match.params.playlistId]
})

const mdtp = dispatch => ({
    getPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    playSong: songId => dispatch(playSong(songId)),
    queueSong: songId => dispatch(queueSong(songId)),
    queuePlaylist: (playlistId, song) => dispatch(queuePlaylist(playlistId, song)),
    logout: () => dispatch(logout()),
    toggleModal: () => dispatch(toggleModal())
})

export default connect(mstp, mdtp)(PlaylistDetail)