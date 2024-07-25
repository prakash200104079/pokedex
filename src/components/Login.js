import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import './Login.css';

const Login = () => {
  // State to store the email input value
  const [email, setEmail] = useState('');

  // State to store the password input value
  const [password, setPassword] = useState('');

  // Redux dispatch function
  const dispatch = useDispatch();

  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Selector to get the login error message from the Redux state
  const loginError = useSelector(state => state.auth.loginError);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await dispatch(login(email, password)); // Dispatch login action
    if (success) {
      // If login is successful, navigate to the user-specific route
      navigate(`/login/${email}`);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        {loginError && <p className="error">{loginError}</p>}
      </form>
    </div>
  );
};

export default Login;
