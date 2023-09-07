import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import characters from '../data/characters.json';

export default function Character() {
  const { id } = useParams();
  const char = characters.find((el) => el.id.toString() === id);

  return char ? (
    <div className='card'>
      <img src={char.image} alt={char.name} className='mr-15'></img>
      <div className='card-content'>
        <h1>{char.name}</h1>
        <hr />
        <p>Статус: {char.status}</p>
        <p>Вид: {char.species}</p>
        {char.type && <p>Тип: {char.type}</p>}
        <p>Пол: {char.gender}</p>
      </div>
    </div>
  ) : (
    <Navigate to='404' replace />
  );
}
