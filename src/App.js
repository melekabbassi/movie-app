import './App.css';
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
      <div className="container">      
        <Switch>
          <Route path="/">
            <Movies />
          </Route>

          <Route path="/Favorite">
            <Favorite />
          </Route>
          <Route path="/Form" element={<Form />}>
            <Form />
          </Route>
        </Switch>
      </div>

      </div>
      <Form />
      <FormModal />
    </BrowserRouter>
  );
}

export default App;