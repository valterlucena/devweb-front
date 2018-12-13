import React, { Component } from 'react';
import { Card, CardContent, CardActions, IconButton, Button, Typography, TextField, InputAdornment} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class CadastroPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            showPassword: false
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        return(
            <div className="login">
                <Card>
                    <CardContent>
                        <Typography 
                            variant="h5"
                            align="center"
                        >
                            Cadastro
                        </Typography>
                        <br/>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="username"
                            fullWidth
                            variant="outlined"
                            onChange={this.handleChange('username')}
                        />
                        <br/>
                        <TextField
                            id="password"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <br/>
                        <center>
                            <p className="size" align="center">
                                Fazer <Link to ="/">login</Link>.
                            </p>
                        </center>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default CadastroPage;