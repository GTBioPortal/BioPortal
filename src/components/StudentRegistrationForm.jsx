import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API from '../api/api'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/**
 * Restering a Student component
 */
class StudentRegistrationForm extends React.Component {

    // creates a new student
    createRegistration = (event) => {

        event.preventDefault();

        const regis = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            class: this.state.class

        }

        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({class: ''});

        console.log(regis);


        // const token = "";

        //TODO: store token
        API.post('student/create', {
            name: regis.name,
            email: regis.email,
            password: regis.password,
            class: regis.class
        }).then(res => {
            console.log(res.data.auth_token);
            alert("Registration successful!")

            // token = res.data.auth_token;
      });
    }

    state = {
        name: '',
        email: '',
        password:'',
        class:'',
        open: false
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value,});
    };

    // submitClicked() {
        // API.post('student/create', {
        //     name: this.state.name,
        //     email: this.state.email,
        //     password: this.state.password,
        //     class: this.state.class
        // });
    // }
    //
     handleClose = (ev) => {
        this.setState({ open: false, class: ev.nativeEvent.target.outerText});
      };

      handleOpen = () => {
        this.setState({ open: true });
      };


    render()  {
        return (
            <form className = "registration" onSubmit={this.createRegistration}>
            <br/>
            <Typography variant="h2" align="center">Enter Information</Typography><br/>

                <TextField name="name" id="outlined-full-width-name" label="Name" placeholder="Name" fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.name} onChange={this.handleChange('name')}/>

                <TextField name="email" id="outlined-full-width-email" label="E-mail Address" placeholder="E-mail Address" fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} autoComplete="email" value={this.state.email} onChange={this.handleChange('email')} type="email"/>

                <TextField name="password" id="outlined-full-width-password" label="Password" placeholder="Password" fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} autoComplete="password" value={this.state.password} onChange={this.handleChange('password')} type="password"/>

                <FormControl variant="outlined" id="outlined-full-width-class" fullWidth margin="normal" >
                  <InputLabel variant="outlined" name="class" >Class Standing</InputLabel>
                      <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.class}
                        onChange={this.handleChange('class')}
                        >
                        <MenuItem value={"FR"}>Freshman</MenuItem>
                        <MenuItem value={"SO"}>Sophmore</MenuItem>
                        <MenuItem value={"JR"}>Junior</MenuItem>
                        <MenuItem value={"SR"}>Senior</MenuItem>

                      </Select>
                </FormControl>

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary" >Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default StudentRegistrationForm