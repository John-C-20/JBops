import {connect} from 'react-redux' ;
import LoginForm from './login_form';
import {login, clearErrors} from '../../actions/session_actions';

const mstp = (state) => {
    
    return{
    user: { 
        name_or_email: '',
        password: ''
    },
    errors: state.errors.session,
    formType: "Log In!" 
}};

const mdtp = dispatch => ({
    action: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp,mdtp)(LoginForm)