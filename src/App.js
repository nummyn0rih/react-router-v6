import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import LocationList from './pages/LocationList';
import EpisodeList from './pages/EpisodeList';
import Character from './pages/Character';
import Location from './pages/Location';
import Episode from './pages/Episode';
import LoginPage from './pages/LoginPage';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import AuthProvider from './context/AuthProvider';
import PrivatRoute from './components/PrivatRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route element={<PrivatRoute />}>
              <Route path='characters' element={<CharacterList />} />
              <Route path='characters/:id' element={<Character />} />
              <Route path='locations' element={<LocationList />} />
              <Route path='locations/:id' element={<Location />} />
              <Route path='episodes' element={<EpisodeList />} />
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
