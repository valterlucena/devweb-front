import React, {Component} from 'react';

import Cards from '../Cards/Cards';

import './Container.css';

class Container extends Component {

    render() {
        return (
            <div className="container">
                <Cards />
            </div>
        );
    }
}

export default Container;