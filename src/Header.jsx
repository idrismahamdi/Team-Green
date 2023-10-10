import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Routes Team Green</a>
        
        {isLoggedIn ? (
          <button className="btn btn-outline-success" type="button" onClick={handleLogout}>Logout</button>
        ) : (
          <Link className="btn btn-outline-success" to="/login">Login</Link>
        )}
        
      </div>
    </nav>
  );
};

export default Header;