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
        this.props.action(this.state)
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
        <div className="signup"> 
            <Link className="signupForm" to="/">Go back</Link> 
            
            <h1 className="signupForm"><img className="spotify_icon" src={window.iconURL}></img>&nbsp;JBOPS</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                {this.errors()}
                </div>
                <br />

                <div>
                <label htmlFor="email" className="mini-header">
                What's your email?
                </label>
                </div>
                <input id="email" type="text" onChange={this.onChange("email")} value={this.state.email}/>
                <br /> 
                <br /> 

                <div>
                <label htmlFor="password" className="mini-header">
                Create a password
                </label> 
                </div>
                <input id="password" type="text" onChange={this.onChange("password")} value={this.state.password}/>
                <br /> 
                <br /> 

                <div>
                <label htmlFor="username" className="mini-header">
                What should we call you?
                </label>
                </div>
                <input id="username" type="text" onChange={this.onChange("username")} value={this.state.username}/>
                <br /> 
                <br /> 

                <label htmlFor="date" className="mini-header">
                    What's your date of birth? 
                </label> 

            
                <div id="date">
                    <div>
                        <div>
                            Month 
                        </div>

                        <select id="month" onChange={this.onChange('dob_month')} defaultValue={""}>
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
                    </div>

                    
                    
                <div>
                    <div>
                        Day  
                    </div>
                    <input id="day" type="text" onChange={this.onChange('dob_day')} value={this.state.dob_day}/>
                </div>
                    
                 <div>   
                    <div>
                        Year
                    </div>
                    <input id="year" type="text" onChange={this.onChange('dob_year')} value={this.state.dob_year} />
                </div>

                </div>
                <br />
                <br />
                
                <div>
                <label htmlFor="date" className="mini-header">
                    What's your gender? 
                </label> 
                </div>
                    <input type="radio" onClick={this.onClick} value="male"/>&nbsp;Male&nbsp; 
                    <input type="radio" onClick={this.onClick} value="female"/>&nbsp;Female&nbsp;
                    <input type="radio" onClick={this.onClick} value="non-binary"/>&nbsp;Non-binary&nbsp;
                
                <br /> 
                <br /> 

                <button className="signup">Sign Up</button>
                <br />
                <br />
            
            </form>
            <div className="signupForm">
            Have an account? <Link className="loginLink" to="/login">Log in.</Link>
            </div>
        </div> 
        )}
}