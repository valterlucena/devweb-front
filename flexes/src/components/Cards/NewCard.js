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

class NewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {
        termo: "",
        definicao: ""
      },
      open: false
    };
  }

  reset = () => {
    this.setState({
      open: false,
      card: {
        termo: "",
        definicao: ""
      }
    });
  };

  submit = () => {
    this.handleClose();
    Api.post("/lista/5bfaf60f43a8e7465ce0fec0/card", this.state.card).then((response) => {
      console.log(response.data);
      if (this.props.newCard) {
        this.props.newCard(this.state.card);
      };
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
      card: { ...this.state.card, [text]: event.target.value }
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
          <DialogTitle id="form-dialog-title">Novo Card</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="termo"
              label="Termo"
              fullWidth
              onChange={this.handleInputChange("termo")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="definicao"
              label="Definição"
              fullWidth
              onChange={this.handleInputChange("definicao")}
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

export default NewCard;
