import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RecDash from './rDash';
import { Button } from '@material-ui/core';

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

class RProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyRegistrationNum: "",
      phone: "",
      email: "",
      recruiterName: "",
      companyWebsite: "",
      profileExist: ""
    };
    this.submitProfile = this.submitProfile.bind(this);
    this.setValues = this.setValues.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentDidMount() {
    debugger;
    let cookie = document.cookie;
    let id = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    let url = "http://localhost:9000/api/companyedit/" + id;
    fetch(url, {
      method: 'GET'
    }).then((result) => {
      return result.json();
    }).then((resultJson) => {
      debugger;
      if (resultJson !== null) {
        this.setState({
          companyName : resultJson.companyName,
          companyRegistrationNum : resultJson.companyRegistrationNo,
          phone : resultJson.contactNo,
          email : resultJson.email,
          recruiterName : resultJson.recruiterName,
          companyWebsite : resultJson.companyWebsite,
          profileExist: "true"
        });
        debugger;
      }
      else {
        this.setState({ profileExist: "false" });
      }
    }).catch((err) => {
      alert(err);
    });
  }

  updateProfile(){
    let cookie = document.cookie;
    let id = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    let companyProfile = {
      companyName: this.state.companyName,
      companyRegistrationNum: this.state.companyRegistrationNum,
      companyWebsite: this.state.companyWebsite,
      email: this.state.email,
      phone: this.state.phone,
      recruiterName: this.state.recruiterName
    };
    let url = "http://localhost:9000/api/company/" + id;
    fetch(url, {
      method: 'PUT',
      mode: "cors",
      body: JSON.stringify(companyProfile),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((result) => {
      alert("Success");
    }).catch((err) => {
      alert("Err");
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitProfile() {
    let cookie = document.cookie;
    let id = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
    if (this.state.companyName.length > 0 && this.state.companyRegistrationNum.length && this.state.phone.length > 0 && this.state.email.length > 0 && this.state.companyWebsite.length > 0 && this.state.recruiterName.length > 0) {
      let companyProfile = {
        companyName: this.state.companyName,
        companyRegistrationNo: this.state.companyRegistrationNum,
        contactNo: this.state.phone,
        email: this.state.email,
        sessionId: id,
        recruiterName: this.state.recruiterName,
        companyWebsite: this.state.companyWebsite
      }
      fetch("http://localhost:9000/api/company", {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(companyProfile),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
      }).catch((err) => {
      });
    }
    else{
      alert("please enter some values");
    }
  }

  setValues(event) {
    this.setState({ [event.target.id]: event.target.value });
    
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <RecDash />
        <div className="margin-top-50">
          <div className="container" style={{ boxSizing: 'border-box', borderStyle: 'ridge', width: '885px' }}>
            <div className="row legend">
              <span style={{ fontSize: '15px', marginLeft: '2px' }}>Company Profile</span>
            </div>
            <div className="row">
              <div className="container">
                <form className={classes.container} noValidate autoComplete="off">
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Company Name"
                        id="companyName"
                        value ={this.state.companyName}
                        onChange={this.setValues}
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      /></div>
                    <div className="form-group col-md-4">
                      <TextField
                        label="Company Registration No."
                        id="companyRegistrationNum"
                        value ={this.state.companyRegistrationNum}
                        className={classes.textField}
                        onChange={this.setValues}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Phone"
                        id="phone"
                        value ={this.state.phone}
                        onChange={this.setValues}
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <TextField
                        label="Email"
                        id="email"
                        value ={this.state.email}
                        onChange={this.setValues}
                        className={classes.textField}
                        helperText="Required"
                        margin="normal"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="Recruiter Name"
                          id="recruiterName"
                          value={this.state.recruiterName}
                          onChange={this.setValues}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <TextField
                          label="Company Website"
                          id="companyWebsite"
                          value={this.state.companyWebsite}
                          onChange={this.setValues}
                          className={classes.textField}
                          helperText="Required"
                          margin="normal"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row legend" style={{ color: 'white', backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end', fontSize: '15px' }}>
            <Button style={{ color: 'white', display: this.state.profileExist === "true" ? "initial" : "none" }} onClick={this.updateProfile}>Edit Profile</Button>
              <Button style={{ color: 'white', display: this.state.profileExist === "false" ? "initial" : "none" }} onClick={this.submitprofile}>Create Profile</Button></div>
          </div>
        </div>
      </div>
    )
  }
};

RProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RProfile);