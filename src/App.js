import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Color from './components/Color';

function App() {

  return (
    <div className="App container">
      <Router>
        <Home default />
        <Number path="/:num/" />
        <Word path="/:word/" />
        <Color path="/:word/:fontColor/:backgColor/" />
      </Router>
    </div>
  );
}

export default App;
