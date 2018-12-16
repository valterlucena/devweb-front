import React, { Component } from "react";
import "./DisciplinaPage.css";
import { Api } from "../../Api";
import { Grid } from "@material-ui/core";
import Disciplina from "./Disciplina";
import NovaDisciplina from "./NovaDisciplina";
import Header from "../Header/Header";

class DisciplinaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      disciplinasIds: [],
      disciplinas: [],
      disciplinasLoaded: false
    };
    this.renderDisciplinas = this.renderDisciplinas.bind(this);
    this.refresh = this.refresh.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentWillMount = () => {
    this.refresh();
  };

  refresh = () => {
    this.reset();
    Api.get("/disciplina").then(response => {
      const disciplinas = response.data;
      this.setState({ disciplinas: disciplinas, disciplinasLoaded: true });
      //this.renderDisciplinas();
    });
  };

  reset = () => {
    this.setState({
      user: [],
      disciplinas: [],
      disciplinasLoaded: false
    });
  };

  renderDisciplinas = () => {
    this.state.disciplinasIds.forEach(disciplinaId => {
      Api.get("/disciplina/" + disciplinaId).then(response => {
        const disciplina = response.data;
        this.setState(state => ({
          disciplinas: state.disciplinas.concat(disciplina)
        }));
        this.setState({
          disciplinasLoaded: true
        });
      });
    });
  };

  render() {
    if (this.state.disciplinasLoaded) {
      return (
        <div>
          <Header logged={true} />
          <div className="container">
            <Grid container spacing={24}>
              {this.state.disciplinas.map(disciplina => (
                <Grid item xs={12} sm={6} lg={4} xl={4} key={disciplina._id}>
                  <Disciplina
                    disciplina={disciplina}
                    deletaDisciplina={this.refresh}
                  />
                </Grid>
              ))}
            </Grid>
            <NovaDisciplina novaDisciplina={this.refresh} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header logged={true} />
          <div className="container">
            Você não possui nenhuma disciplina. Adicione uma nova.
            <NovaDisciplina novaDisciplina={this.refresh} />
          </div>
        </div>
      );
    }
  }
}

export default DisciplinaPage;
