import { useState } from 'react';
import './StarWars.css'
import DisplayStarWars from './DisplayStarWars';

function StarWars() {
  const [characterNumber, setCharacterNumber] = useState('');
  const [data, setData] = useState(null);
  const [savedCharacters, setSavedCharacters] = useState([]);

  async function fetchStarWars() {
    const path = `https://swapi.dev/api/people/${characterNumber}/`;
    const res = await fetch(path);
    const json = await res.json();

    //const cod = json.cod;
   // const message = json.message;

    //if (cod !== 87) {
      //setData({ cod, message });
      //eturn;
    //}

    const name = json.name;
    const height = json.height;
    const mass = json.mass;
    const hairColor = json.hair_color;
    const eyeColor = json.eye_color;

    setData({
      name,
      height,
      mass,
      hairColor,
      eyeColor
    });
  }

  function handleSave() {
    setSavedCharacters(savedCharacters => [...savedCharacters, data]);
  }

  function handleCharacterClick(savedCharacter) {
    setData(savedCharacter);
  }

  return (
    <div className="StarWars">
      {data && <DisplayStarWars {...data} />}
      <form onSubmit={e => {
        e.preventDefault();
        fetchStarWars();
      }}>
        <div>
          <input
            placeholder="Enter Character ID Number"
            value={characterNumber}
            onChange={e => setCharacterNumber(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
      <div className="saved-characters">
        {savedCharacters.map((savedCharacter, index) => (
          <button key={index} onClick={() => handleCharacterClick(savedCharacter)}>
            {savedCharacter.name}
          </button>
        ))}
      </div>
      {data && <button onClick={handleSave}>Save</button>}
    </div>
  );
}

export default StarWars;
