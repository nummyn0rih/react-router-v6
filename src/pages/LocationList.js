import React from 'react';
import { Link } from 'react-router-dom';
import { useSort } from './hooks/useSort';
import locations from '../data/location.json';

export default function Locations() {
  const { sortedList, sort } = useSort(locations);

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
        {sortedList.map((location) => (
          <li key={location.id}>
            <Link to={`/locations/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
