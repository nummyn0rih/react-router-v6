import React from 'react';
import { Link } from 'react-router-dom';
import episodes from '../data/episode.json';

export default function Episodes() {
  return (
    <div>
      <ul className='older'>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
