import './App.css';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
import Form from './Components/Form';

import { FavoriteProvider } from './FavoriteContext';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
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

        <Form />
      </div>
   
  );
}

export default App;