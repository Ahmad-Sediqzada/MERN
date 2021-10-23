import React, { useState, useEffect } from "react";

import './App.css';

function App() {

  const [ pokemon, setPokemon ] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => {
        console.log(res);
        setPokemon(res.results);
      })
      .catch((err) => console.log(err))

  }, []);

  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <h1>All Pokemons</h1>
      <ul>
        {
          pokemon.map((pokemon, index) => {
            return (<li key={index}>{pokemon.name}</li>)
          })
        }
      </ul>


    </div>
  );
}

export default App;
