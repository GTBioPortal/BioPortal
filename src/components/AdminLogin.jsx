import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { withRouter, push } from 'react-router-dom';
import API from '../api/api';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showLoginFailedSnackbar, hideLoginFailedSnackbar }  from '../actions/modals'

import "../styles/login.scss";

/**
 * Student Login Component that handles a student logging in
 */
class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    // this.loginStudent = this.loginStudent.bind(this);


    // this.studentHomepage = this.studentHomepage.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  // studentHomepage() {
  //   const path = '/student';
  //   this.props.history.push(null, path);
  // }

  registerAdmin = () => {
    const path = '/registerAdmin';
    this.props.history.push(path);
  }

  loginAdmin = () => {
    // const path = '/student';
    // this.props.history.push(path);
    // //
    API.post('admin/login', {
          email: this.state.email,
          password: this.state.password,
      }).then(res => {
          console.log(res);

          localStorage.setItem('admin-token', res.data.auth_token);
          if (res.data.status === "success") {
              const path = '/adminHome';
              this.props.history.push({
                pathname: path,
                data: res.config.data
              });
          }
    }).catch(res => {
            // console.log("Authentication failed");
            // console.log(res.response)
            if (res.response.status === 401) {
               alert("Invalid login credentials!")
               // this.props.hideLoginFailedSnackbar();
            }
            if (res.response.status === 500) {
               alert("Invalid login credentials!")
               // this.props.hideLoginFailedSnackbar();
            }
    });
  }

  render() {
    return (
      <div >
        <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={16}>
          <Grid item xs={12}>
                <Typography variant="h2" align="center" className='title' gutterBottom>
                Admin Login
                </Typography>
          </Grid>
        </Grid>
        <div className="Login">
          <Grid container
          direction="column"
          justify="center"
          alignItems="center">
            <form onSubmit={this.handleSubmit}>
            <Grid item xs={12}>
              <TextField
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  margin="normal"
                  variant="outlined"
                  value={this.state.email}
                  onChange={this.handleChange}

                />
            </Grid>
            <Grid item xs={12}>

              <TextField
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  value={this.state.password}
                  onChange={this.handleChange}

                />
            </Grid>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            >

              <Grid item xs={6}>
                  <Button
                    size="medium"
                    id='login'
                    disabled={!this.validateForm()}
                    type="submit"
                    variant="outlined"
                    onClick = {this.loginAdmin}> Login</Button>
              </Grid>
              <Grid item xs={6}>
                  <Button
                    size="medium"
                    type="button"
                    variant="outlined"
                    onClick = {this.registerAdmin}> Register</Button>
              </Grid>
            </Grid>
          </form>

          </Grid>

        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showLoginFailedSnackbar }, dispatch);
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(AdminLogin));