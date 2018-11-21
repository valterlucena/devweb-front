import React, {Component} from 'react';

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

class NewCard extends Component {

    state = {
        open: false,
    };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return(
            <div>
                <Button
                    variant="fab"
                    color="secondary"
                    aria-label="Add"
                    style={{bottom: '2em', 
                            position: 'fixed',
                            right: '2em'}
                    }
                    onClick={this.handleClickOpen}
                >
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle 
                        id="form-dialog-title"
                    >
                        Novo Card
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="termo"
                            label="Termo"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="definicao"
                            label="Definição"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={this.handleClose} 
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button 
                            onClick={this.handleClose}
                            color="primary"
                        >
                            Adicionar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

export default NewCard;