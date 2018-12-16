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

class Disciplina extends Component {
  constructor(props) {
    super(props);
    this.deletaDisciplina = this.deletaDisciplina.bind(this);
  }

  deletaDisciplina = () => {
    Api.delete("/disciplina/" + this.props.disciplina._id).then(response => {
      if (this.props.deletaDisciplina) {
        this.props.deletaDisciplina(this.props.disciplina);
      }
    });
  };

  getUrl = () => {
    window.location.href = `http://localhost:3000/disciplina/${
      this.props.disciplina._id
    }`;
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center">
              {this.props.disciplina.nome}
            </Typography>
            <Typography component="p" align="center">
              {this.props.disciplina.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" onClick={this.getUrl}>
              Ver mais
            </Button>
            <IconButton onClick={this.deletaDisciplina} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Disciplina;
