import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import LocationList from './pages/LocationList';
import EpisodeList from './pages/EpisodeList';
import Character from './pages/Character';
import Location from './pages/Location';
import Episode from './pages/Episode';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
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
      </ul>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='characters' element={<CharacterList />} />
          <Route path='characters/:id' element={<Character />} />
          <Route path='locations' element={<LocationList />} />
          <Route path='locations/:id' element={<Location />} />
          <Route path='episodes' element={<EpisodeList />} />
          <Route path='episodes/:id' element={<Episode />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
