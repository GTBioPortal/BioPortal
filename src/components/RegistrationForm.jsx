import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API from '../api/api'


/**
 * Registration Form component allows employers to create a job posting
 */
class RegistrationForm extends React.Component {

    createRegistration = (event) => {

        event.preventDefault();

        const regis = {
            name: this.state.name,
            companyName: this.state.companyName,
            email: this.state.email,
            password: this.state.password,
            summary: this.state.summary,
        }

        this.setState({name: ''});
        this.setState({companyName: ''});
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({summary: ''});

        //console.log(regis);


        // const token = "";

        //TODO: store token
        API.post('employer/create', {
            name: regis.name,
            email: regis.email,
            password: regis.password,
            company_description: regis.summary,
            company: regis.companyName
        }).then(res => {
            //console.log(res.data.auth_token);
            if (res.data.auth_token == undefined) {
                alert('Registration unsuccessful')
            } else {
                alert("Registration successful!")
            }
        }).catch(res => {
            if (res.response.status === 200) {
               alert("Registration unsuccessful")
               // this.props.hideLoginFailedSnackbar();
            }
      });
    }

    state = {
        name: '',
        companyName: '',
        email: '',
        password: '',
        summary: '',
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

                <TextField name="companyName" id="outlined-full-width-compname" label="Company Name" placeholder="Company Name" fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.companyName} onChange={this.handleChange('companyName')}/>

                <TextField name="email" id="outlined-full-width-email" label="E-mail Address" placeholder="E-mail Address" fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} autoComplete="email" value={this.state.email} onChange={this.handleChange('email')} type="email"/>

                <TextField name="password" id="outlined-full-width-email" label="Password" placeholder="Password" fullWidth
                margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.password}
                onChange={this.handleChange('password')} type="password"/>

                <TextField name="summary" id="outlined-full-width-summary" label="Summary of Position/Company" placeholder="Summary of Position/Company" multiline
                fullWidth rows="5" margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.summary} onChange={this.handleChange('summary')}/>

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary">Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default RegistrationForm