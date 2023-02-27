import React from 'react';

function DisplayStarWars(props) {
  const { error, name, height, mass, hair_color, eye_color, saveCharacter } = props;

  if (error) {
    return <small>Unable to fetch data. Please try again.</small>;
  }

  return (
    <div className="StarWarsDisplay">
      <h1>Character: {name}</h1>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Eye Color: {eye_color}</p>
      <button onClick={saveCharacter}>Save Character</button>
    </div>

  );
}

export default DisplayStarWars;