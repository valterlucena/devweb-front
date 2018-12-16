import React, { Component } from "react";
import { Api } from "../../Api";
import Lista from "./Lista";
import NovaLista from "./NovaLista";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import './ListaPage.css';

class ListaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplina: [],
      nome: "",
      descricao: "",
      disciplinaLoaded: false,
      listasIds: [],
      listas: [],
      listasLoaded: false
    };
    this.renderListas = this.renderListas.bind(this);
    this.refresh = this.refresh.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentWillMount = () => {
    this.refresh();
  };

  refresh = () => {
    var disciplinaId = this.props.location.pathname.split("/")[2];
    this.reset();
    Api.get(`/disciplina/${disciplinaId}`).then(response => {
      const disciplina = response.data;
      this.setState({
        disciplina: disciplina,
        nome: disciplina.nome,
        descricao: disciplina.descricao,
        disciplinaLoaded: true,
        listasIds: disciplina.listas
      });
      this.renderListas();
    });
  };

  reset = () => {
    this.setState({
      disciplina: [],
      disciplinaLoaded: false,
      listas: [],
      listasLoaded: false
    });
  };

  renderListas = () => {
    this.state.listasIds.forEach(listaId => {
      Api.get("/lista/" + listaId).then(response => {
        const lista = response.data;
        this.setState(state => ({
          listas: state.listas.concat(lista)
        }));
        this.setState({ listasLoaded: true });
      });
    });
  };

  render() {
    if (this.state.disciplinaLoaded && this.state.listasLoaded) {
      return (
        <div>
            <Header logged={true} />
            <div className="container">
              <Grid container spacing={24}>
                {this.state.listas.map(lista => (
                  <Grid item xs={12} sm={6} lg={4} xl={4} key={lista._id}>
                    <Lista
                      lista={lista}
                      deletaLista={this.refresh}
                      url={this.props.location}
                    />
                  </Grid>
                ))}
              </Grid>
              <NovaLista novaLista={this.refresh} url={this.props.location} />
            </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header logged={true} />
          <div className="container">
            Sem lista para mostrar. Adicione uma nova.
            <NovaLista novaLista={this.refresh} url={this.props.location} />
          </div>
        </div>
      );
    }
  }
}

export default ListaPage;
