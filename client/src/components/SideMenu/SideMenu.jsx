import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoSmall.jpeg'


import './SideMenu.css';


const sideMenu = props => (
  <nav className="side-menu">
    <ul>
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
  </nav>
);

export default sideMenu;
