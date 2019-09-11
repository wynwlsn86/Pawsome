import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { login } from './services/authApi';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import DrawerToggleButton from './components/SideMenu/DrawerToggleButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      username: '',
      password: '',
      sideDrawerOpen: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  async handleLogin() {
    try {
        const { username, password} = this.state;
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
    this.setState(prevState => {
        return {[key]: value}});
  }

  handleLogOut = () => {
    this.setState({authenticated: false})
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let sideMenu;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideMenu = <SideMenu drawerClickHandler={this.drawerToggleClickHandler}/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height: '100%'}}>
        <Header
          authenticated={this.state.authenticated}
          logOut={this.handleLogOut}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        {sideMenu}
        {backdrop}
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
