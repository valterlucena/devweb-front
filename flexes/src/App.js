import React, { Component } from "react";

import "./styles.css";
import Header from "./components/Header/Header";

import LoginPage from "./components/Autenticacao/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logged={false} />
        <LoginPage />
      </div>
    );
  }
}

export default App;
