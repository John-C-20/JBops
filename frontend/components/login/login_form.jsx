import React from 'react';
import {Link} from 'react-router-dom'

export default class LoginForm extends React.Component {
    componentDidMount() {
        this.props.clearErrors()
    }

    constructor(props) {
        super(props) 
        this.state = this.props.user; 
        this.onSubmit = this.onSubmit.bind(this) 
        this.demoLogin = this.demoLogin.bind(this)
    }

    onSubmit(e) { 
        e.preventDefault() 
        this.props.action(this.state)
    }

    onChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    demoLogin(e) {
        e.preventDefault() 
        this.props.action({
            name_or_email: "Demo",
            password: "password"
        })
    }

    errors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    render() {
        const hi = "xd"
    
        return(
            <div className="login"> 
                <Link className="loginForm" to="/">Go back</Link>
                <h1 className="signupForm"><img className="spotify_icon" src={window.iconURL}></img>&nbsp;JBOPS</h1>
                <br />
                <div className="mini-header loginForm">To continue, log in to Jbops.</div>

                <div className="demo_login">
                    <button onClick={this.demoLogin}>Demo Login</button>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div>
                        {this.errors()} 
                    </div>
                    <br /> 

                    <div>
                        <label htmlFor="name_or_email" className="mini-header">
                            Email address or username
                        </label>
                    </div>
                    <input type="text" id="name_or_email" onChange={this.onChange("name_or_email")} value={this.state.name_or_email}/>
                    <br /> 
                    <br /> 

                    <div>
                    <label htmlFor="password" className="mini-header">  
                    Password 
                    </label> 
                    </div>
                    <input id="password" type="password" onChange={this.onChange("password")} value={this.state.password}/>
                    <br />
                    <br />
                        <a href="https://www.spotify.com/us/password-reset/">Forgot your password?</a>
                    <br /> 
                    <br />


                    <div className="login-container">
                        <div>
                            <input type="checkbox"/> &nbsp; <label>Remember me</label>
                        </div>
                    <button className="login">Log In!</button>
                    </div>

                    <br />
                </form>

                <br /> 
                <div className="loginForm">
                    <p>
                        Don't have an account?
                    </p>
                    <Link className="signupLink" to="/signup"><button>SIGN UP FOR JBOPS</button></Link>
                 
                </div>
        </div> 
        )}
}