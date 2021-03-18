import {connect} from 'react-redux' ;
import SignupForm from './signup_form';
import {signup} from '../../actions/session_actions';

const mstp = state => ({
    user: { 
        username: '',
        email: ''
    },
    formType: "Sign Up" 
});

const mdtp = dispatch => ({
    action: user => dispatch(signup(user))
});

export default connect(mstp,mdtp)(SignupForm)