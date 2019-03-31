import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';

import '../styles/modals.scss';
import '../styles/employerEmailStudent.scss';


class EmailStudentModal extends React.Component {
    sendMessage = (event) => {

        event.preventDefault();

        //set initial values of the different attributes
        const messageInfo = {
            to: "123@gmail.com",
            subject: this.state.subject,
            body: this.state.body,
        }

        //set the states of the different data structures
        this.setState({to: ''});
        this.setState({subject: ''});
        this.setState({body: ''});

        //specify different variables within data structure
        var body_message = messageInfo.body;
        var email = messageInfo.to;
        var subject = messageInfo.subject;

        var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

        //open new window to send email using mailto client
        var win = window.open(mailto_link, 'emailWindow');
        if (win && win.open && !win.closed) win.close();
    }

    //defines data structure that holds information to send email
    state = {
        to: '',
        subject: '',
        body: '',
    };

    //updates values within data structure based on what is submitted in the form
    handleChange = name => event => {
        this.setState({[name]: event.target.value,});
    };

    render () {
        return (
            //defines pop-up window for sending an email
            <Modal
                open={true}>
                //defines action to take when submit is clicked
                <form className = "emailStudent" onSubmit={this.sendMessage}>
                    <br/>
                    <Typography variant="h2" align="center">Enter Information</Typography><br/>

                    <TextField name="subject" id="outlined-full-width-subject" label="Email Subject" placeholder="Email Subject" fullWidth margin="normal" variant="outlined"
                               InputLabelProps={{shrink: true,}} value={this.state.subject} onChange={this.handleChange('subject')}/>

                    <TextField name="body" id="outlined-full-width-body" label="Email Message" placeholder="Type Your Message" fullWidth margin="normal" variant="outlined"
                               InputLabelProps={{shrink: true,}} value={this.state.body} onChange={this.handleChange('body')}/>

                    <Button size='large' type="sendMessage" variant="contained" fullWidth={true} className="sendMessage" color="secondary">Send Message</Button>

                    <div><br/></div>
                </form>
            </Modal>
        );
    }
}

export default connect(
    null, null
)(EmailStudentModal);
