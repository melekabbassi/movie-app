import './App.css';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Card from './Components/Card';
import Favorite from './Components/Favorite';
import Form from './Components/Form';

import { FavoriteProvider } from './FavoriteContext';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
      <div className="container">
      <FavoriteProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" element={<Movies />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Form" element={<Form />} />
        </Switch>
        </BrowserRouter>
        </FavoriteProvider>
      </div>

      <div className="Cards">
        <Card />
        <Card />
      </div>
      </div>
  );
}

export default App;