import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from './components/Container/Container';

import './styles.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        <Link to ="/disciplinas">ver disciplinas</Link>
      </div>
    );
  }
}

export default App;
