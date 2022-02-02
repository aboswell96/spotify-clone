import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Library from './Library/Library';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/library" element={<Library />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

const Search = () => {
  return <div>search</div>;
};

export default App;
