import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import login from './Pages/login';
import home from './Pages/home';
import cadastros from './Pages/cadastros';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/home" component={home} />
        <Route exact path="/cadastros" component={cadastros} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
