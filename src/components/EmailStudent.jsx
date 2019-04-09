import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class EmailStudent extends React.Component {
    sendMessage = (event) => {

        event.preventDefault();

        //set initial values of the different attributes
        const messageInfo = {
            to: "slp0824@yahoo.com",
            subject: this.state.subject,
            body: this.state.body,
        }

        //set the states of the different data structures
        this.setState({to: ''});
        this.setState({subject: ''});
        this.setState({body: ''});

        console.log(messageInfo);

        //specify different variables within data structure
        var body_message = messageInfo.body;
        var email = messageInfo.to;
        var subject = messageInfo.subject;

        window.location.href = "mailto:" + email + '?subject=' + subject + '&body=' + body_message;
    }

    state = {
        to: '',
        subject: '',
        body: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value,});
    };

    render()  {
        return (
            <form className = "emailStudent" onSubmit={this.sendMessage}>
                <br/>
                <Typography variant="h2" align="center">Send Message</Typography><br/>

                <TextField name="emailSubject" id="outlined-full-width-email-subject" label="Email Subject" placeholder="Email Subject" fullWidth margin="normal" variant="outlined"
                           InputLabelProps={{shrink: true,}} value={this.state.subject} onChange={this.handleChange('subject')}/>

                <TextField name="emailBody" id="outlined-full-width-email-body" label="Email Subject" placeholder="Email Subject" fullWidth margin="normal" variant="outlined" multiline rows="5"
                           InputLabelProps={{shrink: true,}} value={this.state.body} onChange={this.handleChange('body')}/>

                <Button size='large' type="sendMessage" variant="contained" fullWidth={true} className="sendMessage" color="secondary">Send Message</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default EmailStudent