import './App.css';
import Nav from './Components/Nav';
import { FavoriteProvider } from './FavoriteContext';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
      <FavoriteProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/Favorite" element={<h1>Favorite</h1>} />
          <Route path="/Form" element={<h1>Form</h1>} />
        </Switch>
        </BrowserRouter>
        </FavoriteProvider>
      </div>
   
  );
}

export default App;
