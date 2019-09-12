import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoSmall.jpeg'


import './SideMenu.css';


const sideMenu = props => (
  <nav className="side-menu">
    <ul>
      <Link
        to='/find-a-pet'
        onClick={props.drawerClickHandler}>
        <li>
        <>&nbsp;</>
        Find a Pet
        <>&nbsp;</>
        </li>
      </Link>
      <Link
        to='/volunteers'
        onClick={props.drawerClickHandler}>
        <li>Volunteer</li>
      </Link>
      <Link
        to='/add-pet'
        onClick={props.drawerClickHandler}>
        <li>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        Add Pet
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        </li>
      </Link>
      <Link
        to='/contact-us'
        onClick={props.drawerClickHandler}>
        <li>Contact Us</li>
      </Link>
      <Link
        to='/login'
        onClick={props.drawerClickHandler}>
        <li>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        Login
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        <>&nbsp;</>
        </li>
      </Link>
    </ul>
  </nav>
);

export default sideMenu;
