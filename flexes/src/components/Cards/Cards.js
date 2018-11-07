import React, {Component} from 'react';

import './Cards.css';
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';

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
                {cards.map(card => (
                    <Card className="card">
                        <CardContent>
                            <Typography variant="h5">
                                {card.termo}
                            </Typography>
                            <Typography component="p">
                                {card.definicao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        );
    }
}

export default Cards;