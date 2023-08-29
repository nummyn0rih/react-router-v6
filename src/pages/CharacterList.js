import React from 'react';
import { Link } from 'react-router-dom';
import characters from '../data/characters.json';

export default function Characters() {
  return (
    <div>
      <ul className='older'>
        {characters.map((char) => (
          <li key={char.id}>
            <Link to={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
