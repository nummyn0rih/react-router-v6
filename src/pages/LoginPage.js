import React, { lazy } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Signin from '../components/Signin';
import { useAuth } from '../context/AuthProvider';

const ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));

export default function LoginPage() {
  const { isError, signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const onSubmit = (inputs) => {
    const user = {
      username: inputs.email,
      password: inputs.password,
    };

    signin(user, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className='form-container'>
      <ErrorBoundary>
        {isError && (
          <div className='error'>Неправильное имя пользователя или пароль</div>
        )}
        <Signin handler={onSubmit} />
        <Link to='/registration'>
          <button className='btn'>Зарегистрироваться</button>
        </Link>
      </ErrorBoundary>
    </div>
  );
}
