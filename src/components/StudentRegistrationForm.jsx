import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/**
 * Restering a Student component
 */
class StudentRegistrationForm extends React.Component {

    // creates a new student
    createRegistration = (event) => {

        event.preventDefault();

        const regis = {
            name: this.state.name,
            email: this.state.email
        }

        this.setState({name: ''});
        this.setState({email: ''});

        console.log(regis);
    }

    state = {
        name: '',
        email: ''
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

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary">Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default StudentRegistrationForm