import React, { Component } from "react";

import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField
} from "@material-ui/core";

import * as firebase from "firebase";

import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      cadastro: false,
      erroCadastro: "",
      erroLogin: ""
    };
    this.setaCadastro = this.setaCadastro.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.registrar = this.registrar.bind(this);
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  registrar = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        this.login();
        this.setaErroCadastro("");
      })
      .catch(error => {
        this.setaErroCadastro(error.message);
      });
  };

  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        this.setaErroLogin(error.message);
      });
    window.location.href = `http://localhost:3000/home`;
  };

  setaCadastro = () => {
    this.setState({ cadastro: !this.state.cadastro });
  };

  setaErroCadastro = erro => {
    this.setState({
      erroCadastro: erro
    });
  };

  setaErroLogin = erro => {
    this.setState({
      erroLogin: erro
    });
  };

  render() {
    return (
      <div className="login">
        <Card>
          {this.state.cadastro ? (
            <CardContent>
              <Typography variant="h5" align="center">
                Cadastro
              </Typography>
              <br />
              <TextField
                margin="dense"
                id="email"
                label="Email"
                value={this.state.email}
                fullWidth
                variant="outlined"
                onChange={this.handleEmailChange}
              />
              <br />
              <TextField
                id="password"
                variant="outlined"
                margin="dense"
                fullWidth
                type="password"
                label="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <br />
              <br />
              <center>
                <Button onClick={this.registrar} color="primary">
                  Criar conta
                </Button>

                <p>{this.state.erroCadastro}</p>
              </center>
            </CardContent>
          ) : (
            <CardContent>
              <Typography variant="h5" align="center">
                Login
              </Typography>
              <br />
              <TextField
                margin="dense"
                id="email"
                label="Email"
                value={this.state.email}
                fullWidth
                variant="outlined"
                onChange={this.handleEmailChange}
              />
              <br />
              <TextField
                id="password"
                variant="outlined"
                margin="dense"
                fullWidth
                type="password"
                label="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <br />
              <br />
              <center>
                <Button onClick={this.login} color="primary">
                  Login
                </Button>
                <p>{this.state.erroLogin}</p>
                <br />
                Ainda não possui uma conta?
                <br />
                <br />
                <Button onClick={this.setaCadastro} color="primary">
                  Criar conta
                </Button>
              </center>
            </CardContent>
          )}
        </Card>
      </div>
    );
  }
}

export default LoginPage;
