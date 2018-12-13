import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Disciplina from './components/Disciplina/Disciplina';

import './styles.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Disciplina />
      </div>
    );
  }
}

export default App;
