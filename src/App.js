import './App.css';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>      
          <Route path="/" element={<Movies />} />
          <Route path="/search/:search" element={<Movies />} />

          <Route path="/favorite" element={<Favorite />} />      
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;