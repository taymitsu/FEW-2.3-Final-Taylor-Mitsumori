import { useState } from 'react';
import './StarWars.css';
import DisplayStarWars from './DisplayStarWars';
import SavedCharacters from './SavedCharacters';

function StarWars() {
  const [characterNumber, setCharacterNumber] = useState('');
  const [data, setData] = useState(null);
  const [savedCharacters, setSavedCharacters] = useState([]);

  async function fetchStarWars() {
    //const apikey
    const path = `https://swapi.dev/api/people/${characterNumber}/`;
    const res = await fetch(path);
    const json = await res.json();

    //error message
    
    const { name, height, mass, hair_color, eye_color } = json;

    setData({
      error: false,
      name,
      height,
      mass,
      hair_color,
      eye_color,
    });
  }

  function saveCharacter() {
    setSavedCharacters([...savedCharacters, data]);
  }

  return (
    //display left
    <div className="StarWars">
      <h2>Star Wars Characters</h2>
      {data && <DisplayStarWars {...data} saveCharacter={saveCharacter} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchStarWars();
        }}
      >
        <input
          placeholder="Character ID Number"
          value={characterNumber}
          onChange={(e) => setCharacterNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <div className="Saved-Characters">
      <h2>Saved Characters </h2>
        {savedCharacters.length > 0 && (
          <SavedCharacters characters={savedCharacters} />
        )}
      </div>
    </div>
  );
}

export default StarWars;