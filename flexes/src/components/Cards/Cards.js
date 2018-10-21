import React, {Component} from 'react';

import './Cards.css';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

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
                    <Paper className="card">
                        <strong>{card.termo}</strong>
                        <p>{card.definicao}</p>
                    </Paper>
                ))}
            </div>
        );
    }
}

export default Cards;