import React from 'react' 
import SignupFormContainer from './signup/signup_form_container';
import LoginFormContainer from './login/login_form_container';
import {Route, Switch, Link}  from 'react-router-dom'

const App = () => (
    <div>
        <h1>JBOPS BABY!!</h1>
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
        {/* change this path later ^  */}
    </div>
)

export default App; 