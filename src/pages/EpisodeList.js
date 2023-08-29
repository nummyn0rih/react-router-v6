import React from 'react';
import { Link } from 'react-router-dom';
import { useSort } from './hooks/useSort';
import episodes from '../data/episode.json';

export default function Episodes() {
  const { sortedList, sort } = useSort(episodes);

  const handleClick = (order) => () => {
    sort(order);
  };

  return (
    <div>
      <div className='sort mb-15'>
        <span>Упорядочить по дате: </span>
        <button onClick={handleClick('ASC')}>По возрастанию</button>
        <button onClick={handleClick('DESC')}>По убыванию</button>
      </div>
      <ul className='older'>
        {sortedList.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
