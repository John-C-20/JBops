import {connect} from 'react-redux';
import Jbops from './jbops'

const mstp = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mdtp = dispatch => ({
    
})

export default connect(mstp,null)(Jbops)