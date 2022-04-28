import './App.css';
import {useState} from 'react';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
import Form from './Components/Form';
import FormModal from './Components/FormModal';
import Login from './Components/Login';
import Signup from './Components/Signup';
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

  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <Nav />
  //     <div className="container">      
  //       <Switch>
  //         <Route path="/">
  //           <Movies movies={movies} />
  //         </Route>

  //         <Route path="/Favorite" component={<Favorite movies={movies}/>}>
  //           <Favorite addMovie={addMovie} />
  //         </Route>
          
  //         <Route path="/Form" component={<FormModal />}>
  //           <FormModal />
  //         </Route>
  //       </Switch>
  //     </div>
      
  //     </div>
  //     <Login />
  //     <Signup />
  //   </BrowserRouter>
  // );
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>      
          <Route path="/">
            <Movies />
          </Route>

          <Route path="/favorite">
            <Favorite />
          </Route>
          
          <Route path="/form">
            <FormModal />
          </Route>
      </Switch>
      </div>
      <Login />
      <Signup />
    </BrowserRouter>
  );
}

export default App;