import React, {Component} from 'react';

import Cards from '../Cards/Cards';
import NewCard from '../Cards/NewCard';
import './Container.css';
import { Api } from '../../Api';
import Grid from '@material-ui/core/Grid';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            cards: [
                {
                    id: 1,
                    termo: 'a',
                    definicao: 'b'    
                }
            ]
        }
    }

    componentWillMount = async() => {
        await this.getCards();
    }

    getCards = async () => {
        let response = await Api.get('/lista');
        let nome = response.data.titulo;
        this.setState({
            titulo: nome,
            cards: response.data.cards
        });
    }

    render() {
        const {cards} = this.state;
        console.log(this.state);
        return (
            <div className="container">
                <Grid
                    container
                    spacing={24}
                >
                    {cards.map(card => (
                            <Grid 
                                item 
                                xs={12} 
                                sm={6} 
                                lg={4} 
                                xl={4}
                            >  
                                <Cards 
                                    card={card}
                                />
                            </Grid>
                    ))}
                </Grid>
                <NewCard refresh={this.refresh}/>
            </div>
        );
    }
}

export default Container;