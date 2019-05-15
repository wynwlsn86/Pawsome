import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { login } from './services/authApi';


class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      username: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  async handleLogin() {
    try {
        const { username, password} = this.state;
        console.log(username, password);
        const response = await login({username, password});
        console.log(response);
        this.setState({
            authenticated: true
        })
    }
    catch (e) {
        console.log(e.message);
    }
  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log(key)
    console.log(value)
    this.setState(prevState => {
        return {[key]: value}});
}
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main 
          authenticated={this.state.authenticated} 
          handleLogin={this.handleLogin}
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
          />
        <Footer/>
      </div>
    );
  }
}

export default App;




