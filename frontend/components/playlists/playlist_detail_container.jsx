import {connect} from 'react-redux'
import PlaylistDetail from './playlist_detail'; 

const mstp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    // songs: state.entities
    // need to add a song slice of state first 
})

const mdtp = dispatch => ({

})

export default connect(mstp, null)(PlaylistDetail)