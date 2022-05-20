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
  
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  // const addMovie = (title, year, rating, image, description) => {
  //   const newMovie = {
  //     title: title,
  //     year: year,
  //     description: description,
  //     image: image,
  //     rating: rating
  //   };
  //   setMovies(movies.concat(newMovie));
  // }

  const addFavorite = (title, year, id) => {
    const newFavorite = {
      title: title,
      year: year,
      id: id
    };
    setFavorites(favorites.concat(newFavorite));
  }

  const getData = () => {
    axios
      .get(`http://localhost:3000/movies`)
      .then((result) => {
        setMovies(result.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  
  console.log(movies);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>      
          <Route path="/" element={<Movies />} />

          <Route path="/favorite" element={<Favorite addFavorite={addFavorite} />} />      
        </Routes>
          <FormModal/>
      </div>
    </BrowserRouter>
  );
}

export default App;