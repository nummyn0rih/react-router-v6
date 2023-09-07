import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Login from '../components/Login';

export default function MainLayout() {
  return (
    <>
      <ul className='nav mb-15'>
        <li>
          <NavLink to='/'>Домой</NavLink>
        </li>
        <li>
          <NavLink to='/characters'>Герои</NavLink>
        </li>
        <li>
          <NavLink to='/locations'>Локации</NavLink>
        </li>
        <li>
          <NavLink to='/episodes'>Эпизоды</NavLink>
        </li>
        <Login />
      </ul>
      <Outlet />
    </>
  );
}
