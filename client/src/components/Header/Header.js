import React, { Component } from 'react';
import logo from '../../assets/logoSmall.jpeg'
import { Link } from 'react-router-dom';
import './Header.css'



class Header extends Component {
  render() {
    if(this.props.authenticated){
      return(
        <div className="Navbar">
        <ul>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
          <Link to='/find-a-pet'>
            <li>Find a Pet</li>
          </Link>
          <Link to='/volunteers'>
            <li>Volunteer</li>
          </Link>
          <Link to='/add-pet'>
            <li>Add Pet</li>
          </Link>
          <Link to='/contact-us'>
            <li>Contact Us</li>
          </Link>
          <Link to='/login'
            onClick={this.props.logOut}>
            <li>Log Out</li>
          </Link>
        </ul>
      </div>
      )
    }
    return (
      <div className="Navbar">
        <ul>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
          <Link to='/find-a-pet'>
            <li>Find a Pet</li>
          </Link>
          <Link to='/volunteers'>
            <li>Volunteer</li>
          </Link>
          <Link to='/add-pet'>
            <li>Add Pet</li>
          </Link>
          <Link to='/contact-us'>
            <li>Contact Us</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
