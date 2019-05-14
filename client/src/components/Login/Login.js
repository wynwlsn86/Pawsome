import React, { Component } from 'react';
import LogInForm from '../LogInForm/LogInForm'

class LogIn extends Component {
    render() {
        return (
            <div>
                <h1>LOG IN</h1>
                <LogInForm />
            </div>
        );
    }
}

export default LogIn;