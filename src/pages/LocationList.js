import React from 'react';
import { Link } from 'react-router-dom';
import locations from '../data/location.json';

export default function Locations() {
  return (
    <div>
      <ul className='older'>
        {locations.map((location) => (
          <li key={location.id}>
            <Link to={`/locations/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
