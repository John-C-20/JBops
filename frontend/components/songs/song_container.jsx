import {connect} from 'react-redux';
import Song from './song';

const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

export default connect(mstp, null)(Song);