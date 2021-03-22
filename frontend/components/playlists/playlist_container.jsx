import {connect} from 'react-redux'; 
import Playlist from './playlist'; 

const mstp = state => ({
    currentUser:  state.entities.users[state.session.currentUserId]
})

export default connect(mstp, null)(Playlist); 