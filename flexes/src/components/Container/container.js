import React, {Component} from 'react';

import Cards from '../Cards/cards';

import './container.css';

export default class Container extends Component {

    render() {
        return (
            <div className="container">
                <Cards />
            </div>
        );
    }
}