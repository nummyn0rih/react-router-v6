import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AuthProvider from './context/AuthProvider';
import PrivatRoute from './components/PrivatRoute';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Characters = lazy(() => import('./pages/CharacterList'));
const Character = lazy(() => import('./pages/Character'));
const Locations = lazy(() => import('./pages/LocationList'));
const Location = lazy(() => import('./pages/Location'));
const Episodes = lazy(() => import('./pages/EpisodeList'));
const Episode = lazy(() => import('./pages/Episode'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Registration = lazy(() => import('./pages/Registration'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route element={<PrivatRoute />}>
              <Route path='characters' element={<Characters />} />
              <Route path='characters/:id' element={<Character />} />
              <Route path='locations' element={<Locations />} />
              <Route path='locations/:id' element={<Location />} />
              <Route path='episodes' element={<Episodes />} />
              <Route path='episodes/:id' element={<Episode />} />
            </Route>
          </Route>
        </Route>
        <Route path='login' element={<LoginPage />} />
        <Route path='registration' element={<Registration />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
