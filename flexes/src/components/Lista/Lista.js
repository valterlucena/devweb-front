import React, { Component } from "react";

import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Api } from "../../Api";

class Lista extends Component {
  constructor(props) {
    super(props);
    this.deletaLista = this.deletaLista.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
  }

  deletaLista = () => {
    Api.delete(`${this.props.url.pathname}/lista/` + this.props.lista._id).then(
      response => {
        if (this.props.deletaLista) {
          this.props.deletaLista(this.props.lista);
        }
      }
    );
  };

  changeUrl = () => {
    window.location.href = `http://localhost:3000/lista/${
      this.props.lista._id
    }`;
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center">
              {this.props.lista.titulo}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" onClick={this.changeUrl}>
              Ver mais
            </Button>
            <IconButton onClick={this.deletaLista} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Lista;
