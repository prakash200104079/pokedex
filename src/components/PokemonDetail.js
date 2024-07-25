// src/components/PokemonDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const { gmailid, pokemonname } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`${apiUrl}/${pokemonname}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokémon detail:", error);
      }
    };
    fetchPokemonDetail();
  }, [pokemonname, apiUrl]);

  if (!pokemon) return <div className="loading">Loading...</div>;

  return (
    <div className="pokemon-detail">
      <button className="back-button" onClick={() => window.history.back()}>Back to List</button>
      <div className="detail-card">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="detail-image" />
        <h2>{pokemon.name}</h2>
        <div className="pokemon-info">
          <p><strong>Height:</strong> {pokemon.height} m</p>
          <p><strong>Weight:</strong> {pokemon.weight} kg</p>
          <p><strong>Type(s):</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
          <p><strong>Abilities:</strong> {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
