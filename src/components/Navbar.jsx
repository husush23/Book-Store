/*eslint-disable*/
import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='left'>
        <h1 className='logo'>Book Store CMS</h1>
        <ul>
          <li>
            <NavLink to='/'>Books</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='categories'>Categories</NavLink>
          </li>
        </ul>
      </div>
      <div className='right'>
        <i class='fa-solid fa-user'></i>
      </div>
    </nav>
  );
}

export default Navbar;
