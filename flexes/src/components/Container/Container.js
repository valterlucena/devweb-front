import React, {Component} from 'react';

import Cards from '../Cards/Cards';
import NewCard from '../Cards/NewCard';
import './Container.css';

class Container extends Component {

    render() {
        return (
            <div className="container">
                <Cards />
                <NewCard />
            </div>
        );
    }
}

export default Container;