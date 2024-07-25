import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/:gmailid" element={<PrivateRoute><PokemonList /></PrivateRoute>} />
        <Route path="/login/:gmailid/:pokemonname" element={<PrivateRoute><PokemonDetail /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
