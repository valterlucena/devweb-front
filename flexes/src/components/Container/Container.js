import React, {Component} from 'react';

import Cards from '../Cards/Cards';

import './Container.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

class Container extends Component {

    render() {
        return (
            <div className="container">
                <Cards />
                <Button
                    variant="fab"
                    color="secondary"
                    aria-label="Add"
                    style={{bottom: '2em', 
                            position: 'fixed',
                            right: '2em'}}
                >
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

export default Container;