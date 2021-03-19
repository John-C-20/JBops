import React from 'react';
import {Link} from 'react-router-dom';

export default class SignupForm extends React.Component {
    componentDidMount() {
        this.props.clearErrors()
    }

    constructor(props) {
        super(props) 
        this.state = this.props.user; 
        this.state.password = '' 
        this.onSubmit = this.onSubmit.bind(this) 
    }

    onSubmit(e) { 
        e.preventDefault() 
        this.props.action(this.state).then(this.props.history.push("/"))
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
        return(
        <div> 
            <Link to="/">Back to Splash Page</Link> 
            <br /> 
            <h1>SIGN UP IDIOT</h1>
            <form onSubmit={this.onSubmit}>
                {this.errors()}
                <br />
                <label>
                Email 
                <br /> 
                <input type="text" onChange={this.onChange("email")} value={this.state.email}/>
                </label>
                <br /> 
                
                <label>
                Username 
                <br /> 
                <input type="text" onChange={this.onChange("username")} value={this.state.username}/>
                </label>
                <br /> 


                <label> 
                Password   
                <br />
                <input type="text" onChange={this.onChange("password")} value={this.state.password}/>
                </label> 
                <br /> 
                <br />
                <button>Sign Up!</button>
            </form>
        </div> 
        )}
}