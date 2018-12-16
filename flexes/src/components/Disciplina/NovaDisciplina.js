import React, { Component } from "react";
import { Api } from "../../Api";

import {
  Fab,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class NovaDisciplina extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disciplina: {
        nome: "",
        descricao: ""
      },
      open: false
    };
  }

  reset = () => {
    this.setState({
      open: false,
      disciplina: {
        titulo: ""
      }
    });
  };

  submit = () => {
    this.handleClose();
    Api.post("/disciplina", this.state.disciplina).then(response => {
      if (this.props.novaDisciplina) {
        this.props.novaDisciplina(this.state.disciplina);
      }
    });
    this.reset();
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = text => event => {
    this.setState({
      disciplina: { ...this.state.disciplina, [text]: event.target.value }
    });
  };

  render() {
    return (
      <div>
        <Fab
          color="secondary"
          aria-label="Add"
          style={{ bottom: "2em", position: "fixed", right: "2em" }}
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Nova disciplina</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="nome"
              label="Nome"
              fullWidth
              onChange={this.handleInputChange("nome")}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="descicao"
              label="Descrição"
              fullWidth
              onChange={this.handleInputChange("descricao")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submit} color="primary">
              Adicionar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NovaDisciplina;
