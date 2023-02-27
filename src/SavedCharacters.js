import React from 'react';
//import styles from './SavedCharacters.css'

function SavedCharacters({ characters }) {
  return (
    <div className="SavedCharactersCont">
      {characters.map((character) => (
        <div key={character.name} className="SavedCharacter">
          <h3>Character: {character.name}</h3>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Eye Color: {character.eye_color}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedCharacters;
