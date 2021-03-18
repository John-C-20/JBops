import React from 'react';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = this.props.user; 
        this.state.password = '' 
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
            <h1>SIGN UP IDIOT</h1>
            <form onSubmit={this.onSubmit}>
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