import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./Signup.css";
import { Redirect } from 'react-router-dom';
import Navbar from './Nav-bar';
import Particles from 'react-particles-js';

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#b61924"
    }
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
      loginAs: "",
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.selectLoginAs = this.selectLoginAs.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0 && this.state.confirmpassword.length > 0 && this.state.loginAs.length > 0;
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  selectLoginAs(event) {
    this.setState({ loginAs: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.password === this.state.confirmpassword) {
      debugger;
      let user = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        loginAs: this.state.loginAs
      }
        fetch("http://localhost:9000/api/login", {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
      }).then((result) => {
        this.setState({ redirect: true });
      }).catch((err) => {
        alert(err);
      });
    }
    else {
      alert("Password do not match");
    }
  }

  render() {
    if (this.state.redirect) {
      return (< Redirect to={"/login"} />)
    }
    return (
      <div>
        <Navbar />
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                id="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>User Name</ControlLabel>
              <FormControl
                id="username"
                type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                id="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>SignUp As Developer</ControlLabel>
              <FormControl
                onChange={this.selectLoginAs}
                id="confirmpassword"
                type="radio"
                name="loginAs"
                value="Developer"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>SignUp As Company</ControlLabel>
              <FormControl
                onChange={this.selectLoginAs}
                id="confirmpassword"
                type="radio"
                name="loginAs"
                value="Company"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              value="Developer"
              disabled={!this.validateForm()}
              type="submit">
              Signup
          </Button>
          </form>
        </div>
        <Particles
          params={particleOpt} />
      </div>
    );
  }
}
export default Login;