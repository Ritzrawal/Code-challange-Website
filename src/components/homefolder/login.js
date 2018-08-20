import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./Login.css";
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
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "",
      password: "",
      redirect: false,
      direct: false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let username = this.state.username;
    let url = "http://localhost:9000/api/login/" + username;
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then((result) => {
      return result.json();
    }).then((resultJson) => {
      return resultJson;
    }).then((userCredentials) => {
      if (userCredentials[0].password === this.state.password) {
        document.cookie = "cookie=" + userCredentials[0]._id;
        if (userCredentials[0].loginAs === "Developer") {
          this.setState({ redirectToDeveloper: true });
        }
        if (userCredentials[0].loginAs === "Company") {
          this.setState({ redirectToCompany: true });
        }
        console.log("Login Successful");
        debugger;
      }
      else {
        this.setState({ username: "", password: "" });
        alert('Password is wrong');
        console.log("Login Unsuccessful");
      }
    }).catch((err) => {
      alert('User Does not match');
    });
  }

  render() {
    if (this.state.redirectToDeveloper) {
      return (<Redirect to={"/profile"} />);
    }

    if (this.state.redirectToCompany) {
      return (<Redirect to={"/recruiterProfile"} />);
    }

    // if (this.state.direct) {
    //   return (<Redirect to={"/adminmenu"} />)
    // }

    return (
      <div>
        <Navbar />
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>User Name</ControlLabel>
              <FormControl
                autoFocus
                type="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            {/* <input type = "button" value = "log in" bsSize="large"  block onClick={this.loginHandle}/> */}
            <Button
              block
              bsSize="large"
              // onClick={this.loginHandle}
              disabled={!this.validateForm()}
              type="submit">
              Login
            </Button>
            {/* <Button
              block
              bsSize="large"
              onClick={this.loginRecruit}
              disabled={!this.validateForm()}
              type="submit"
            >
              Login As Recruiter
          </Button> */}
          </form>
        </div>
        <Particles params={particleOpt} />
      </div>
    );
  }
}
export default Login;