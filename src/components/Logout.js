import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Logout = () => {
  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle logout action
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    // Button to trigger logout
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
