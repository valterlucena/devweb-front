import React, { Component } from "react";

import "./Cards.css";
import { Typography, Card, CardContent, CardActions, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Api } from "../../Api";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard = () => {
    Api.delete('/lista/5bfaf60f43a8e7465ce0fec0/card/' + this.props.card._id).then(response => {
      if(this.props.deleteCard) {
        this.props.deleteCard(this.props.card);
      }
    })
  }

  render() {
    return (
      <div className="cards">
        <Card>
          <CardContent>
            <Typography variant="h5" align="center">
              {this.props.card.termo}
            </Typography>
            <Typography component="p" align="center">
            {this.props.card.definicao}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={this.deleteCard} aria-label="Delete">
                <DeleteIcon/>
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Cards;
