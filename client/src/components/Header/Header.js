import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <ul className="Nav-ul">
      <Link to='/find-a-pet'>
        <li className="Nav-li">Find a Pet</li>
      </Link>
      <Link to='/volunteer'>
        <li className="Nav-li">Volunteer</li>
      </Link>
      <Link to='/contact-us'>
        <li className="Nav-li">Contact Us</li>
      </Link>
      <Link to='/login'>
        <li className="Nav-li">Login</li>
      </Link>
    </ul>
  </div>
);


export default Header;
