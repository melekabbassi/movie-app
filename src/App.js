import './App.css';
import Nav from './Components/Nav';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/Favorite" element={<h1>Favorite</h1>} />
          <Route path="/Form" element={<h1>Form</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
