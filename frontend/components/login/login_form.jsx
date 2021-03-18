import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = this.props.user; 
        this.onSubmit = this.onSubmit.bind(this) 
    }

    onSubmit(e) { 
        e.preventDefault() 
        this.props.action(this.state) 
    }

    onChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        return(
        <div> 
            <h1>LOG IN ALREADY</h1>
            <form onSubmit={this.onSubmit}>
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