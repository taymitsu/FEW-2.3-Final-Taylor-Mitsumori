import { useState } from 'react';
import './StarWars.css'
import DisplayStarWars from './DisplayStarWars';

function StarWars() {
  const [characterNumber, setCharacterNumber] = useState('');
  const [data, setData] = useState(null);

  async function fetchStarWars() {
    const path = `https://swapi.dev/api/people/${characterNumber}/`;
    const res = await fetch(path);
    const json = await res.json();

    console.log(json);

    if (json.error) {
      setData({ error: json.error });
      return;
    }

    const name = json.name;
    const height = json.height;
    const mass = json.mass;
    const hair_color = json.hair_color;
    const eye_color = json.eye_color;

    setData({
      name,
      height,
      mass,
      hair_color,
      eye_color
    });
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
    </div>
  );
}

export default StarWars;
