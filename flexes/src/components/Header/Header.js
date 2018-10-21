import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import './Header.css';

class Header extends Component {
    render() {
        return(
            <AppBar 
                position="fixed"
                color="primary"
                className="header"
            >
                <Typography 
                    variant="h6"
                    color="inherit"
                >
                    Flexes
                </Typography>
            </AppBar>
        );
    }
}

export default Header;