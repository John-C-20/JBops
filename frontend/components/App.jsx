import React from 'react' 
import SignupFormContainer from './signup/signup_form_container';
import {Route, Switch}  from 'react-router-dom'

const App = () => (
    <div>
        <h1>JBOPS BABY!!</h1>
        <Route path="/signup" component={SignupFormContainer} />
        {/* change this path later ^  */}
    </div>
)

export default App; 