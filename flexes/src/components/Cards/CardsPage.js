import React, { Component } from "react";
import { Api } from "../../Api";
import NewCard from "./NewCard";
import Cards from "./Cards";
import Header from "../Header/Header";
import "./CardsPage.css";
import Grid from "@material-ui/core/Grid";

class CardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      listaLoaded: false,
      cards: [],
      cardsLoaded: false
    };
    this.renderCards = this.renderCards.bind(this);
    this.refresh = this.refresh.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentWillMount = () => {
    this.refresh();
  };

  refresh = () => {
    this.reset();
    var url = this.props.location.pathname;
    Api.get(`${url}`).then(response => {
      const lista = response.data;
      this.setState({ lista: lista, listaLoaded: true });
      this.renderCards();
    });
  };

  reset = () => {
    this.setState({
      lista: [],
      listaLoaded: false,
      cards: [],
      cardsLoaded: false
    });
  };

  renderCards = () => {
    this.state.lista.cards.forEach(cardId => {
      Api.get("/card/" + cardId).then(response => {
        const card = response.data;
        this.setState(state => ({
          cards: state.cards.concat(card)
        }));
        this.setState({ cardsLoaded: true });
      });
    });
  };

  render() {
    if (this.state.listaLoaded && this.state.cardsLoaded) {
      return (
        <div>
          <Header logged={true} />
          <div className="container">
            <Grid container spacing={24}>
              {this.state.cards.map(card => (
                <Grid item xs={12} sm={6} lg={4} xl={4} key={card._id}>
                  <Cards
                    card={card}
                    deleteCard={this.refresh}
                    url={this.props.location}
                  />
                </Grid>
              ))}
            </Grid>
            <NewCard newCard={this.refresh} url={this.props.location} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header logged={true} />
          <div className="container">
            Sem cards para serem mostrados. Adicione um novo.
            <NewCard newCard={this.refresh} url={this.props.location} />
          </div>
        </div>
      );
    }
  }
}

export default CardsPage;
