import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <nav className='navbar navbar-expand-lg bg-secondary container' style={{ borderRadius: '2px' }} data-bs-theme='dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/all-blog'>Blogs</Link>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/my-blogs'>My Blogs</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/add-blog'>Add Blog</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/search'>Search</Link>
            </li>
          </ul>
          <button className='btn btn-danger' onClick={logout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
