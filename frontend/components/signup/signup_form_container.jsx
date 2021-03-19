import {connect} from 'react-redux' ;
import SignupForm from './signup_form';
import {signup, clearErrors} from '../../actions/session_actions';

const mstp = (state) => ({
    user: { 
        username: '',
        email: ''
    },
    errors: state.errors.session, 
    formType: "Sign Up" 
});

const mdtp = dispatch => ({
    action: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp,mdtp)(SignupForm)