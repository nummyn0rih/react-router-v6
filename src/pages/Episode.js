import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import episodes from '../data/episode.json';

export default function Character() {
  const { id } = useParams();
  const episode = episodes.find((el) => el.id.toString() === id);

  return episode ? (
    <div className='card'>
      <div className='card-content'>
        <h1>{episode.name}</h1>
        <hr />
        <p>Дата выхода: {episode.air_date}</p>
        <p>Номер: {episode.episode}</p>
      </div>
    </div>
  ) : (
    <Navigate to='404' replace />
  );
}
