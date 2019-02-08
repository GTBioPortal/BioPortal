import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class RegistrationForm extends React.Component {

    nameRef = React.createRef();
    companyNameRef = React.createRef();
    emailRef = React.createRef();
    summaryRef = React.createRef();

    createRegistration = (event) => {

        event.preventDefault();

        const regis = {
            name: this.nameRef.current.value,
            companyName: this.companyNameRef.current.value,
            email: this.emailRef.current.value,
            summary: this.summaryRef.current.value,
        }

        event.currentTarget.reset();

        console.log(regis);
    }


    render()  {
        return (
            <form className = "registration" onSubmit={this.createRegistration}>
            <br/>
            <Typography variant="h2" align="center">Enter Information</Typography><br/>


                <Typography variant="h6">Name:<br/>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                </Typography>

                <Typography variant="h6">Company Name:<br/>
                    <input name="companyName" ref={this.companyNameRef} type="text" placeholder="Company Name"/>
                </Typography>

                <Typography variant="h6">E-mail Address:<br/>
                    <input name="email" ref={this.emailRef} type="text" placeholder="E-mail Address"/>
                </Typography>

                <Typography variant="h6">Summary of Position/Company:<br/>
                    <textarea name="summary" ref={this.summaryRef} placeholder="Summary of Position/Company" />
                </Typography><br/>

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary">Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default RegistrationForm