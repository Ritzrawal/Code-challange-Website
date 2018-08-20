import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dash from './dash';
import { Button } from '@material-ui/core';
import { ListItem } from 'material-ui';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const genders = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  }
];

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'male',
      numProject: 0,
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      email: "",
      linkedIn: "",
      github: "",
      projects: [],
      houseNo: "",
      street: "",
      locality: "",
      city: "",
      pinCode: "",
      country: "",
      profileExist: ""
    };

    this.addProject = this.addProject.bind(this);
    this.createProjects = this.createProjects.bind(this);
    this.removeProject = this.removeProject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setValues = this.setValues.bind(this);
    this.setProject = this.setProject.bind(this);
    this.submitprofile = this.submitprofile.bind(this);
    // this.editProfile = this.editProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  setProject(event) {
    let val = event.target.value;
    let id = event.target.id;
    let arrProjects = this.state.projects;
    arrProjects[id] = val;
    this.setState({ projects: arrProjects }, console.log(this.state.projects));
  }

  createProjects(val, index) {
    console.log(index + "index");
    return <div> <TextField
      key={index}
      value={val}
      onChange={this.setProject}
      label="Project"
      id={index}
      margin="normal" />
      <br />
    </div>;
  }

  componentDidMount() {
    debugger;
    let cookie = document.cookie;
    let id = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    let url = "http://localhost:9000/api/developeredit/" + id;
    fetch(url, {
      method: 'GET'
    }).then((result) => {
      return result.json();
    }).then((resultJson) => {
      if (resultJson !== null) {
        this.setState({
          gender: resultJson.gender,
          firstName: resultJson.firstName,
          middleName: resultJson.middleName,
          lastName: resultJson.lastName,
          phone: resultJson.contactNo,
          email: resultJson.email,
          linkedIn: resultJson.linkedinProfile,
          gitHub: resultJson.gitHub,
          projects: resultJson.projects,
          houseNo: resultJson.address.houseNo,
          street: resultJson.address.street,
          locality: resultJson.address.locality,
          city: resultJson.address.city,
          pinCode: resultJson.address.pincode,
          country: resultJson.address.country,
          profileExist: "true"
        })
      }
      else {
        this.setState({ profileExist: "false" });
      }
    }).catch((err) => {
      alert(err);
    });
  }
  
  addProject() {
    let projects = this.state.projects;
    projects.push("");
    this.setState({ projects: projects });
  }

  submitprofile() {
    if (this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.middleName.length > 0 && this.state.contactNo.length > 0 && this.state.gender.length > 0 && this.state.email.length > 0) {
      let cookie = document.cookie;
      let id = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
      debugger;

      let userProfile = {
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        contactNo: this.state.phone,
        gender: this.state.gender,
        email: this.state.email,
        projects: this.state.projects,
        linkedinProfile: this.state.linkedIn,
        gitHub: this.state.github,
        address: {
          houseNo: this.state.houseNo,
          street: this.state.street,
          locality: this.state.locality,
          city: this.state.city,
          pincode: this.state.pinCode,
          country: this.state.country
        },
        sessionId: id
      };

      fetch("http://localhost:9000/api/developer", {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(userProfile),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
        alert("Success");
      }).catch((err) => {
        alert(err);
      });
    }
    else {
      alert("Please provide some values in the required fields");
    }
  }

  removeProject() {
    var projects = this.state.projects;
    projects.pop();
    this.setState({ projects: projects });
  }

  setValues(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  // editProfile() {
  //   debugger;
  //   let cookie = document.cookie;
  //   let id = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
  //   debugger;
  //   let url = "http://localhost:9000/api/developeredit/" + id;
  //   fetch(url, {
  //     method: 'GET'
  //   }).then((result) => {
  //     return result.json();
  //   }).then((resultJson) => {
  //     this.setState({
  //       gender: resultJson.gender,
  //       firstName: resultJson.firstName,
  //       middleName: resultJson.middleName,
  //       lastName: resultJson.lastName,
  //       phone: resultJson.contactNo,
  //       email: resultJson.email,
  //       linkedIn: resultJson.linkedinProfile,
  //       gitHub: resultJson.gitHub,
  //       projects: resultJson.projects,
  //       houseNo: resultJson.address.houseNo,
  //       street: resultJson.address.street,
  //       locality: resultJson.address.locality,
  //       city: resultJson.address.city,
  //       pinCode: resultJson.address.pincode,
  //       country: resultJson.address.country
  //     })
  //   }).catch((err) => {
  //     alert(err);
  //   });
  // }

  updateProfile() {
    let cookie = document.cookie;
    let id = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    let userProfile = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      contactNo: this.state.phone,
      gender: this.state.gender,
      email: this.state.email,
      projects: this.state.projects,
      linkedinProfile: this.state.linkedIn,
      gitHub: this.state.github,
      address: {
        houseNo: this.state.houseNo,
        street: this.state.street,
        locality: this.state.locality,
        city: this.state.city,
        pincode: this.state.pinCode,
        country: this.state.country
      }
    };
    let url = "http://localhost:9000/api/developer/" + id;
    fetch(url, {
      method: 'PUT',
      mode: "cors",
      body: JSON.stringify(userProfile),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((result) => {
      alert("Success");
    }).catch((err) => {
      alert("Err");
    });
  }

  render() {
    const { classes } = this.props;
    let projects = this.state.projects;
    var listProjects = projects.map((val, index) => this.createProjects(val, index));

    return (
      <div>
        <Dash />
        <div className="margin-top-50">
          <div className="container" style={{ boxSizing: 'border-box', borderStyle: 'ridge', width: '885px' }}>
            <div className="row legend">
              <span style={{ fontSize: '15px', marginLeft: '2px' }}>Profile</span>
            </div>
            <div className="row">
              <div className="container">
                <form className={classes.container} noValidate autoComplete="off">
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="First Name"
                        id="firstName"
                        value={this.state.firstName}
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                        onChange={this.setValues}
                      /></div>
                    <div className="form-group col-md-4">
                      <TextField
                        label="Middle Name"
                        id="middleName"
                        value={this.state.middleName}
                        className={classes.textField}
                        onChange={this.setValues}
                        margin="normal"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <TextField
                        label="Last Name"
                        id="lastName"
                        value={this.state.lastName}
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                        onChange={this.setValues}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Phone"
                        id="phone"
                        className={classes.textField}
                        value={this.state.phone}
                        onChange={this.setValues}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <TextField
                        id="gender"
                        select
                        label="Gender"
                        className={classes.textField}
                        value={this.state.gender}
                        onChange={this.handleChange('gender')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        helperText="Required"
                        margin="normal"
                      >
                        {genders.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Email"
                        id="email"
                        className={classes.textField}
                        value={this.state.email}
                        helperText="Required"
                        margin="normal"
                        onChange={this.setValues}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="Linkedin"
                          id="linkedIn"
                          value={this.state.linkedIn}
                          className={classes.textField}
                          onChange={this.setValues}
                          margin="normal"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="GitHub"
                          id="github"
                          value={this.state.gitHub}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.setValues}
                        />
                      </div>
                    </div>
                    <div className="row legend">
                      <span style={{ fontSize: '15px', marginLeft: '2px' }}>Project</span>
                    </div>
                    <div className="row" style={{ marginLeft: '2px' }}>
                      <div className="form-group">
                        {listProjects}
                        <br />
                        <Button style={{ color: 'black' }} onClick={this.addProject}>Add Projects</Button>
                        <Button style={{ color: 'black' }} onClick={this.removeProject}>Remove Projects</Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row legend">
                      <span style={{ fontSize: '15px', marginLeft: '2px' }}>Address</span>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="House-No."
                          id="houseNo"
                          value={this.state.houseNo}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                          onChange={this.setValues}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Street"
                          id="street"
                          value={this.state.street}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                          onChange={this.setValues}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Locality"
                          id="locality"
                          value={this.state.locality}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                          onChange={this.setValues}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="City"
                          id="city"
                          value={this.state.city}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                          onChange={this.setValues}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Pin-Code"
                          id="pinCode"
                          value={this.state.pinCode}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                          onChange={this.setValues}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <TextField
                          label="Country"
                          id="country"
                          value={this.state.country}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                          onChange={this.setValues}
                        />
                      </div></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row legend" style={{ color: 'white', backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end', fontSize: '15px' }}>
              <Button style={{ color: 'white', display: this.state.profileExist === "true" ? "initial" : "none" }} onClick={this.updateProfile}>Edit Profile</Button>
              <Button style={{ color: 'white', display: this.state.profileExist === "false" ? "initial" : "none" }} onClick={this.submitprofile}>Create Profile</Button>
            </div>
          </div>
        </div >
      </div >
    )
  }
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);