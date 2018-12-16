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

class NovaLista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lista: {
        titulo: ""
      },
      open: false
    };
  }

  reset = () => {
    this.setState({
      open: false,
      lista: {
        titulo: ""
      }
    });
  };

  submit = () => {
    this.handleClose();
    Api.post(`${this.props.url.pathname}/lista`, this.state.lista).then(
      response => {
        if (this.props.novaLista) {
          this.props.novaLista(this.state.lista);
        }
      }
    );
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
      lista: { ...this.state.lista, [text]: event.target.value }
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
          <DialogTitle id="form-dialog-title">
            Nova Lista de Estudos
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="titulo"
              label="Título"
              fullWidth
              onChange={this.handleInputChange("titulo")}
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

export default NovaLista;
