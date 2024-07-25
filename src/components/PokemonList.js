// src/components/PokemonList.js
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import './PokemonList.css';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { gmailid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const limit = process.env.REACT_APP_POKEMON_LIMIT;

  useEffect(() => {
    const fetchPokemons = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemons(pokemonDetails);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons(`${apiUrl}?limit=${limit}&offset=${(currentPage - 1) * limit}`);
  }, [currentPage, apiUrl, limit]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleNextPage = () => {
    if (nextUrl) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (prevUrl) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="pokemon-list">
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <h2>Pokémon List</h2>
      <div className="card-container">
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/login/${gmailid}/${pokemon.name}`}
            className="card"
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card-image" />
            <h3>{pokemon.name}</h3>
            <p>Height: {pokemon.height} m</p>
            <p>Weight: {pokemon.weight} kg</p>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={!prevUrl}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!nextUrl}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
