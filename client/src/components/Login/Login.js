import React, { Component } from 'react';
import LogInForm from '../LogInForm/LogInForm'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className='Main-login'>
                <LogInForm
                    authenticated={this.props.authenticated}
                    handleLogin={this.props.handleLogin}
                    username={this.props.username}
                    password={this.props.password}
                    handleChange={this.props.handleChange}
                    />
            </div>
        );
    }
}

export default Login;
