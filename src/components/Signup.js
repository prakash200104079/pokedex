import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  // State to store the email input value
  const [email, setEmail] = useState('');

  // State to store the password input value
  const [password, setPassword] = useState('');

  // State to store the success message after signup
  const [successMessage, setSuccessMessage] = useState('');

  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    const result = await dispatch(signup(email, password));
    if (result) {
      setSuccessMessage('Signup successful! Please log in.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
