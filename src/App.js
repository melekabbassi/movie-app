import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
// import Form from './Components/Form';
import FormModal from './Components/FormModal';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
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