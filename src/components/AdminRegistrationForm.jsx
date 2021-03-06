import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API from '../api/api'

/**
 * Registration Form component allows employers to create a job posting
 */
class AdminRegistrationForm extends React.Component {

    createRegistration = (event) => {

        event.preventDefault();

        const regis = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            position: this.state.position
        }

        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({position: ''});

        console.log(regis);


        // const token = "";

        //TODO: store token
        API.post('admin/create', {
            name: regis.name,
            email: regis.email,
            password: regis.password,
            position: regis.position
        }).then(res => {
            alert("Registration successful!")
        }).catch(res => {
            if (res.response.status === 200) {
               alert("Job posting unsuccessful");
            }
            // token = res.data.auth_token;
      });
    }

    state = {
        name: '',
        email: '',
        password: '',
        position: '',
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value,});
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

                <TextField name="password" id="outlined-full-width-email" label="Password" placeholder="Password" fullWidth
                margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.password}
                onChange={this.handleChange('password')} type="password"/>

                <TextField name="position" id="outlined-full-width-position" label="Position" placeholder="Position" fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.position} onChange={this.handleChange('position')}/>

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary">Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default AdminRegistrationForm