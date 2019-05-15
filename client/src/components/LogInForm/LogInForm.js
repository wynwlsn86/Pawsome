import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogInForm extends Component {




    handleSubmitForm = (event) => {
        event.preventDefault();
        console.log('submitted');
        this.props.handleLogin();
      }

    render() {
        if(this.props.authenticated){
            return <Redirect to='/add-pet' />
        }
        return (
            <div>
                <from onSubmit={this.handleSubmitForm}>
                    <lable>Username:</lable>
                    <input 
                        type='text' placeholder='Enter Username' 
                        name='username'
                        onChange={this.props.handleChange}
                        value={this.props.username}
                    />
                    <lable>Password:</lable>
                    <input
                        type='password' placeholder='Enter Password' 
                        name='password'
                        onChange={this.props.handleChange}
                        // value={this.props.password}
                    />
                    <button type='submit' onClick={this.handleSubmitForm}>LOG IN</button>
                </from>
            </div>
        );
    }
}

export default LogInForm;