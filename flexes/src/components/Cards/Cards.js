import React, {Component} from 'react';

import './Cards.css';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';

class Cards extends Component {
    
    state = {
        cards: [
            {
                termo: 'termo1',
                definicao: 'definicao1'
            },
            {
                termo: 'termo2',
                definicao: 'definicao2'
            },
            {
                termo: 'termo3',
                definicao: 'definicao3'
            },
            {
                termo: 'termo4',
                definicao: 'definicao4'
            },
        ]
    }

    render() {
        const {cards} = this.state;
        return (
            <div className="cards">
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