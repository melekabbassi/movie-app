import './App.css';
import React from 'react';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
import Form from './Components/Form';
import FormModal from './Components/FormModal';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

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
    </BrowserRouter>
  );
}

export default App;