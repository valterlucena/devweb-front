import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CardsPage from "./components/Cards/CardsPage";
import DisciplinaPage from "./components/Disciplina/DisciplinaPage";
import ListaPage from "./components/Lista/ListaPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={DisciplinaPage} />
      <Route path="/disciplina/:idDisciplina" component={ListaPage} />
      <Route path="/lista/:idLista" component={CardsPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

const config = {
  apiKey: "AIzaSyDHA-Fylv41sUQF58erp70QxTNSJJN5fJM",
  authDomain: "flexes-b957f.firebaseapp.com",
  databaseURL: "https://flexes-b957f.firebaseio.com",
  projectId: "flexes-b957f",
  storageBucket: "flexes-b957f.appspot.com",
  messagingSenderId: "646119606163"
};

firebase.initializeApp(config);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
