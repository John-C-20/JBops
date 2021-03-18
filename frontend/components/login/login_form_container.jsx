import {connect} from 'react-redux' ;
import LoginForm from './login_form';
import {login} from '../../actions/session_actions';

const mstp = state => ({
    user: { 
        name_or_email: '',
        password: ''
    },
    formType: "Log In!" 
});

const mdtp = dispatch => ({
    action: user => dispatch(login(user))
});

export default connect(mstp,mdtp)(LoginForm)