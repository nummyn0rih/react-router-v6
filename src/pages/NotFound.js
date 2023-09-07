import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);
  }, []);

  return (
    <div className='notfound'>
      <h1>404</h1>
    </div>
  );
}
