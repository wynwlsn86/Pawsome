import React from 'react';
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import reddit from '../../assets/reddit.svg'
import './Footer.css'

const Footer = () => (
  <div className="Footer">
    <p>
      "We rescue animals not to change the world;
      we rescue them to change their worlds."
    </p>
    <ul>
    <a href='https://facebook.com'>
      <img src={facebook} alt='Facebook' />
    </a>
    <a href='https://twitter.com'>
      <img src={twitter} alt='Twitter' />
    </a>
    <a href='https://reddit.com'>
      <img src={reddit} alt='Reddit' />
    </a>
    </ul>
    <p>
    Copyright 2019 Pawsome Animal Rescue. All rights reserved.
    </p>
  </div>
);

export default Footer;
