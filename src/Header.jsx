import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './header.css';

const Header = ({ isLoggedIn, handleLogout, username }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand"><img className="logo" src={logo}></img></a>

        {isLoggedIn ? (
          <>
            <h3>Welcome {username}!</h3>

            {window.location.pathname != "/delete-account" ?
              <Link className="btn btn-outline-success" to="/delete-account">Account</Link> :
              <Link className="btn btn-outline-success" to="/routes-page">Go Back</Link>}
          </>
        ) : (
          <Link className="btn btn-outline-success" to="/login">Login</Link>
        )}

      </div>
    </nav>
  );
};

export default Header;