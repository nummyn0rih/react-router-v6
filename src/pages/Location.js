import React, { lazy } from 'react';
import { useParams } from 'react-router-dom';
import useGetElement from '../hooks/useGetElement';
import getUrl from '../data/getUrl';

const ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));

export default function Character() {
  const { id } = useParams();
  const url = `${getUrl('locations')}/${id}`;

  const { loading, error, element } = useGetElement(url);

  return (
    <ErrorBoundary>
      <div className='card'>
        <div className='card-content'>
          <h1>{element.name}</h1>
          <hr />
          <p>Тип: {element.type}</p>
          <p>Измерение: {element.dimension}</p>
        </div>
      </div>

      {loading && <div className='elem-loading'>Загрузка ...</div>}
      {error && <div className='elem-error'>Ошибка</div>}
    </ErrorBoundary>
  );
}
