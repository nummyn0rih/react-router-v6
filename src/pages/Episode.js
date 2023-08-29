import React from 'react';
import { useParams } from 'react-router-dom';
import episodes from '../data/episode.json';

export default function Character() {
  const { id } = useParams();
  const episode = episodes.find((el) => el.id.toString() === id);

  return (
    <div className='card'>
      <div className='card-content'>
        <h1>{episode.name}</h1>
        <hr />
        <p>Дата выхода: {episode.air_date}</p>
        <p>Номер: {episode.episode}</p>
      </div>
    </div>
  );
}
