import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import {  Header} from 'react-mdl';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class RecDash extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleHistory = () => {

    return (<div>Hello World</div>)
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root} >
        <AppBar position="static" style={{backgroundColor:'#39424e'}}>
          <Toolbar >
            <Typography variant="title"  color="inherit" className={[classes.flex, classes.middle]}>
              
              <Header className="header-color" style={{backgroundColor:'#39424e'}} title={<div style={{ textDecoration: 'none', color: 'white'}} to="/"><i class ="cicon"></i><span className="logo">{"{C}"}</span>CodeChallenge</div>} scroll></Header>
            </Typography>
            <Link to="recruiterProfile" className="btn" ><Button className="btn-white">CompanyLogo</Button></Link>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <Link to="adminmenu"><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
                  <Link to="recruiterProfile"><MenuItem onClick={this.handleClose}>Profile</MenuItem></Link>
                  <Link to="login"><MenuItem onClick={this.handleClose}>Log-Out</MenuItem></Link>
                 
                </Menu>
              </div>
            )}
          </Toolbar>
          
        </AppBar>
      </div>
    );
  }
}

RecDash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecDash);