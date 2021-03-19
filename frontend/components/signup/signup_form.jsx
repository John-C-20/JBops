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
        this.onClick = this.onClick.bind(this)
    }

    onSubmit(e) { 
        e.preventDefault() 
        this.props.action(this.state).then(this.props.history.push("/"))
    }

    onChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    onClick(e) {
        this.setState({gender: e.target.value})
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
                What's your email? 
                <br /> 
                <input type="text" onChange={this.onChange("email")} value={this.state.email}/>
                </label>
                <br /> 
                <br /> 

                <label> 
                Create a password   
                <br />
                <input type="text" onChange={this.onChange("password")} value={this.state.password}/>
                </label> 
                <br /> 
                <br /> 

                <label>
                What should we call you? 
                <br /> 
                <input type="text" onChange={this.onChange("username")} value={this.state.username}/>
                </label>
                <br /> 
                <br /> 

                <label>
                    What's your date of birth? 
                    <br /> 
                    Month &nbsp;
                    <select onChange={this.onChange('dob_month')} defaultValue={""}>
                        <option value="" disabled></option>  
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    &nbsp; Day &nbsp; 
                    <input type="text" onChange={this.onChange('dob_day')} value={this.state.dob_day}/>
                    &nbsp; Year &nbsp;
                    <input type="text" onChange={this.onChange('dob_year')} value={this.state.dob_year} />
                </label>
                <br />
                <br />
                <label>
                    What's your gender? 
                    <br /> 
                    <input type="radio" onClick={this.onClick} value="male"/>&nbsp;Male&nbsp; 
                    <input type="radio" onClick={this.onClick} value="female"/>&nbsp;Female&nbsp;
                    <input type="radio" onClick={this.onClick} value="non-binary"/>&nbsp;Non-binary&nbsp;
                </label>
                <br /> 
                <br /> 

                <button>Sign Up</button>
                <br />
                <br />
            
            </form>
            Have an account? <Link to="/login">Log in.</Link>
        </div> 
        )}
}