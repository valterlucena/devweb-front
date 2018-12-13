import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Disciplina from './components/Disciplina/Disciplina';
import LoginPage from './components/Autenticacao/LoginPage';
import CadastroPage from './components/Autenticacao/CadastroPage'
import Lista from './components/Lista/Lista';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exactpath="/" component={App} />
            <Route exactpath="/cadastro" component={CadastroPage} />
            <Route exactpath="/disciplinas" component={Disciplina} />
            <Route exactpath="/lista" component={Lista} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
