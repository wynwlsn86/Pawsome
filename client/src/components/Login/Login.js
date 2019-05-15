import React, { Component } from 'react';
import LogInForm from '../LogInForm/LogInForm'

class Login extends Component {
    render() {
        return (
            <div>
                <h1>LOG IN</h1>
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