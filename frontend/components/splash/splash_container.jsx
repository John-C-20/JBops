import {connect} from 'react-redux';
import Splash from './splash';
import {logout} from "../../actions/session_actions";

const mstp = state => {
    return {
    currentUser: state.entities.users[state.session.currentUserId] 
}}

const mdtp = dispatch => {
    return {
    logout: () => dispatch(logout())
}}

export default connect(mstp, mdtp)(Splash); 