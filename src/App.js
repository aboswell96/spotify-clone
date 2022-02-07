import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Library from './Library/Library';
import { Route, Routes } from 'react-router-dom';
import { RequestSpotifyAccessToken } from './spotify/spotify';
import { useEffect } from 'react';
import Search from './Search/Search';

const App = () => {
  // useEffect(() => {
  //   var gotAccessToken = await RequestSpotifyAccessToken();
  // }, []);

  return (
    <div style={{ height: '100vh' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/library" element={<Library />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
