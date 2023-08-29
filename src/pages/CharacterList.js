import React from 'react';
import { Link } from 'react-router-dom';
import { useSort } from './hooks/useSort';
import characters from '../data/characters.json';

export default function Characters() {
  const { sortedList, sort } = useSort(characters);

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
        {sortedList.map((char) => (
          <li key={char.id}>
            <Link to={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
