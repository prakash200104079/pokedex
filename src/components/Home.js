import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Pokedex</h1>
      <p>Please choose an option:</p>
      <div className="home-buttons">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/signup" className="home-button">Signup</Link>
      </div>
    </div>
  );
};

export default Home;
