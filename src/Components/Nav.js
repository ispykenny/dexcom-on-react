import React from 'react';
import {Link} from 'react-router-dom';
function Nav() {
  return(
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About App</li>
      </Link>
      <Link to="/data">
        <li>Get Data</li>
      </Link>
    </nav>
  )
}

export default Nav;