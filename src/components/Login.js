import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function Login() {
  const { currentUser, signout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    signout(() => {
      navigate('/');
    });
  };

  return (
    <div className='btn-container'>
      {currentUser === null ? (
        <>
          <Link to='/login'>
            <button className='btn'>Sign In</button>
          </Link>
          <Link to='/registration'>
            <button className='btn'>Sign Up</button>
          </Link>
        </>
      ) : (
        <Link to='/'>
          <button className='btn' onClick={handleClick}>
            Sign Out
          </button>
        </Link>
      )}
    </div>
  );
}
