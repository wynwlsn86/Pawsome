import React from 'react';

const Header = () => (
  <div>
    <ul class="Nav-ul">
      <Link to='/find-a-pet'>
        <li class="Nav-li">Find a Pet</li>
      </Link>
      <Link to='/volunteer'>
        <li class="Nav-li">Volunteer</li>
      </Link>
      <Link to='/contact-us'>
        <li class="Nav-li">Contact Us</li>
      </Link>
      <Link to='/login'>
        <li class="Nav-li">Login</li>
      </Link>
    </ul>
  </div>
);


export default Header;
