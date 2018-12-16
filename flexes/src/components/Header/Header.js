import React, { Component } from "react";

import { AppBar, Toolbar, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as firebase from "firebase";

class Header extends Component {
  logout = () => {
    firebase.auth().signOut();
    window.location.href = `http://localhost:3000/`;
  };

  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="item">
            Flexes
          </Typography>
          {this.props.logged ? (
            <Button
              style={{ position: "fixed", right: "1em" }}
              color="inherit"
              className="item"
              onClick={this.logout}
            >
              Logout
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
