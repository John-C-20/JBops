import React from 'react' 
import SignupFormContainer from './signup/signup_form_container';
import LoginFormContainer from './login/login_form_container';
import SplashContainer from './splash/splash_container';
import {Route, Switch, Link}  from 'react-router-dom'
import AuthRoute from '../util/route_util'

const App = () => (
    <div>
        <Switch>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        </Switch>
            
        
        {/* change this path later ^  */}
    </div>
)

export default App; 