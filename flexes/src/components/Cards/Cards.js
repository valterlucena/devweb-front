import React, {Component} from 'react';

import './Cards.css';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { Api } from '../../Api';

class Cards extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentWillMount = async() => {
        await this.refresh();
        console.log(this.state);
    }

    refresh = async() => {
        let response = await Api.get('/cards')
    }

    render() {
        const {cards} = this.state;
        return (
            <div className="cards">
                {this.refresh}
                <Grid 
                    container 
                    spacing={40}
                >
                    {cards.map(card => (
                        <Grid 
                            item 
                            xs={12} 
                            sm={6} 
                            lg={4} 
                            xl={4}
                        >
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" align="center">
                                        {card.termo}
                                    </Typography>
                                    <Typography component="p" align="center">
                                        {card.definicao}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Cards;