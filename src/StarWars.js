import { useState } from 'react';
import './StarWars.css'

function StarWars() {
  const[ number, setNumber ] = useState(' ')

  return (
    <div className="StarWars">
      <h1>{number}</h1>

      <form>
        <input
          placeholder="Enter Number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default StarWars;