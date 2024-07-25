import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  // Get the current location from the router
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navigation">
      {currentPath === '/login' && (
        <Link to="/signup">Signup</Link>
      )}
      {currentPath === '/signup' && (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navigation;
