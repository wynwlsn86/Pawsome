import React, { Component } from 'react';
import { login } from '../../services/authApi'

class LogInForm extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        console.log(key)
        console.log(value)
        this.setState(prevState => {
            return {[key]: value}});
    }
    async handleLogin() {
        try {
            const { email, password} = this.state;
            console.log(email, password);
            const response = await login({email, password});
            console.log(response);
            this.setState({
                isAuthenticated: true
            })
        }
        catch (e) {
            console.log(e.message);
        }
      }

    handleSubmitForm = (event) => {
        event.preventDefault();
        console.log('submitted');
        this.handleLogin();
      }

    render() {
        return (
            <div>
                <from onSubmit={this.handleSubmitForm}>
                    <lable>Username:</lable>
                    <input 
                        type='text' placeholder='Enter Username' 
                        name='username'
                        onChange={this.handleChange}
                        value={this.state.usrname}
                    />
                    <lable>Password:</lable>
                    <input
                        type='password' placeholder='Enter Password' 
                        name='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <button type='submit' onClick={this.handleSubmitForm}>LOG IN</button>
                </from>
            </div>
        );
    }
}

export default LogInForm;