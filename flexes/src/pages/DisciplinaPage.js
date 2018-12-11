import React, {Component} from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

class DisciplinaPage extends Component {
    render() {
        return(
            <div>
                <Header />
                <br /><br /><br /><br /><br /><br />
                <p>aparentemente deu certo</p>
                <Link to="/">voltar</Link>
            </div>
        );
    }
}

export default DisciplinaPage;