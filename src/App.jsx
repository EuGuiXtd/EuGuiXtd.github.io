import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
}
  from 'react-router-dom';
import React from 'react';
import login from './Pages/login';
import Home from './Pages/home';
import cadastros from './Pages/cadastros';

function App() {
  const usuarios = JSON.parse(localStorage.getItem('user'));
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/cadastros" component={cadastros} />
        <Route exact path="/home">
          {usuarios === null ? <Redirect to="/" /> : <Home /> }
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
