import React, {Component} from 'react';

import './Cards.css';
import { Typography, Card, CardContent} from '@material-ui/core';

class Cards extends Component {
    
    constructor(props) {
        super(props);
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
                </Card>
            </div>
        );
    }
}

export default Cards;