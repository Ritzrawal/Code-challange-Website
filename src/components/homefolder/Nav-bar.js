import React, { Component } from 'react';
import { Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: '#39424e' }}>
                    <Toolbar>
                        <Header className="header-color" style={{ backgroundColor: '#39424e' }}
                            title={
                                <Link to="/">
                                <div style={{ textDecoration: 'none', color: 'white' }} to="/">
                                    <i class="cicon"></i>
                                    <span className="logo">{"{C}"}
                                    </span>  CodeChallenge
                                    </div>
                                </Link>
                            } scroll>
                            <Navigation>
                                <Link to="/fordevelopers">For Developers</Link>
                                <Link to="/forcompanies">For Companies</Link>
                                <Link to="/login">Log In</Link>
                                <Link to="/signup">Sign Up</Link>
                            </Navigation>
                        </Header>
                    </Toolbar>
                </AppBar>
            </div>

        )
    }
}