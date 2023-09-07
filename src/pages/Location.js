import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import locations from '../data/location.json';

export default function Character() {
  const { id } = useParams();
  const location = locations.find((el) => el.id.toString() === id);

  return location ? (
    <div className='card'>
      <div className='card-content'>
        <h1>{location.name}</h1>
        <hr />
        <p>Тип: {location.type}</p>
        <p>Измерение: {location.dimension}</p>
      </div>
    </div>
  ) : (
    <Navigate to='404' replace />
  );
}
