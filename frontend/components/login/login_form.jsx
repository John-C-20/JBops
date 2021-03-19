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
    }

    onSubmit(e) { 
        e.preventDefault() 
        this.props.action(this.state)
        // .then(this.props.history.push("/")) 
    }

    onChange(field) {
        return e => this.setState({ [field]: e.target.value })
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
            <div> 
            <Link to="/">Back to Splash Page</Link>
            <br />
            <h1>LOG IN ALREADY</h1>
            <form onSubmit={this.onSubmit}>
                {this.errors()} 
                <br />
                <label>
                Enter Username or Email! 
                <br /> 
                <input type="text" onChange={this.onChange("name_or_email")} value={this.state.name_or_email}/>
                </label>
                <br /> 

                <label> 
                Password 
                <br />
                <input type="text" onChange={this.onChange("password")} value={this.state.password}/>
                </label> 
                <br />
                <br />
                <button>Log In!</button>
            </form>
        </div> 
        )}
}