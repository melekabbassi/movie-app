import './App.css';
import {useState} from 'react';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
import Form from './Components/Form';
import FormModal from './Components/FormModal';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  
  const [movies, setMovies] = useState([]);

  const addMovie = (title, year, rating, image, description) => {
    const newMovie = {
      title: title,
      year: year,
      description: description,
      image: image,
      rating: rating
    };
    setMovies(movies.concat(newMovie));
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      <div className="container">      
        <Switch>
          <Route path="/">
            <Movies movies={movies} />
          </Route>

          <Route path="/Favorite" component={Favorite}>
            <Favorite addMovie={addMovie} />
          </Route>
          <Route path="/Form" component={Form}>
            <Form />
          </Route>
        </Switch>
      </div>

      </div>
    </BrowserRouter>
  );
}

export default App;