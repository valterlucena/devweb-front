import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Api } from "../../Api";
import {Button, IconButton, Grid, Card, CardContent, CardActions, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

class Disciplina extends Component {

    constructor(props) {
        super(props);
        this.state = {
          disciplina: [],
          disciplinaLoaded: false,
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
        this.reset();
        Api.get("/disciplina/5c11ab0152ce950a57c3a246").then(response => {
            const disciplina = response.data;
            this.setState({ disciplina: disciplina, disciplinaLoaded: true});
            this.renderListas();
        });
    }

    reset = () => {
        this.setState({
            disciplina: [],
            disciplinaLoaded: false,
            listas: [],
            listasLoaded: false
        });
    }

    renderListas = () => {
        this.state.disciplina.listas.forEach(listaId => {
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
              <br/><br/><br/><br/><br/><br/>
              <Grid container spacing={24}>
                {this.state.listas.map(lista => (
                  <Grid item xs={12} sm={6} lg={4} xl={4} key={lista._id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" align="center">
                          {lista.titulo}
                        </Typography>
                        <Typography component="p" align="center">
                        {lista.descricao}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button color="primary">
                          Ver mais
                        </Button>
                        <IconButton onClick={this.deleteCard} aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          );
        } else {
          return (
            <div>
              Sem lista para mostra. Adicione uma nova.
            </div>
          );
        }
      }
}

export default Disciplina;