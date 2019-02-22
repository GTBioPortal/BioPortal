import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

class JobPostingForm extends React.Component {

    createPosting = (event) => {
        // 1. Stop from submitting
        event.preventDefault();

        const posting = {
            jobTitle: this.state.jobTitle,
            company: this.state.company,
            resume: this.state.resume,
            coverLetter: this.state.coverLetter,
            transcript: this.state.transcript,
            location: this.state.location,
            startDate: this.state.startDate,
            desc: this.state.desc,
            skills: this.state.skills,
            deadline: this.state.deadline,
        }

        this.setState({resume: false});
        this.setState({coverLetter: false});
        this.setState({transcript: false});
        this.setState({jobTitle: ''});
        this.setState({company: ''});
        this.setState({location: ''});
        this.setState({startDate: '2019-01-01'});
        this.setState({desc: ''});
        this.setState({skills: ''});
        this.setState({deadline: '2019-01-01'});

        console.log(posting);

    }

    state = {
        resume: false,
        coverLetter: false,
        transcript: false,
        jobTitle: '',
        company: '',
        location: '',
        startDate: "2019-01-01",
        desc: '',
        skills: '',
        deadline: "2019-01-01",
    };

    handleCheckedChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value,});
    };

    render()  {
        return (
            <form className = "jobPosting" onSubmit={this.createPosting}>
            <br/>
            <Typography variant="h2" align="center">Position Information</Typography><br/>

                <TextField name="jobTitle" id="outlined-full-width-name" label="Job Title" placeholder="Job Title" fullWidth margin="normal"
                variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.jobTitle} onChange={this.handleChange('jobTitle')}/>

                <TextField name="company" id="outlined-full-width-name" label="Company" placeholder="Company Name"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.company} onChange={this.handleChange('company')}/>

                <TextField name="location" id="outlined-full-width-name" label="Job Location" placeholder="e.g. Atlanta, Georgia"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.location} onChange={this.handleChange('location')}/>

                <TextField name="startDate" id="outlined-full-width-name" label="Start Date" type="date"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.startDate} onChange={this.handleChange('startDate')}/>

                <TextField name="desc" id="outlined-full-width-name" label="Job Description" placeholder="Job Description"
                fullWidth margin="normal" variant="outlined" multiline rows="5"
                InputLabelProps={{shrink: true,}} value={this.state.desc} onChange={this.handleChange('desc')}/>

                <TextField name="skills" id="outlined-full-width-name" label="Preferred Skills" placeholder="Preferred Skills"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.skills} onChange={this.handleChange('skills')}/>

                <TextField name="deadline" id="outlined-full-width-name" label="Application Deadline" type="date"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.deadline} onChange={this.handleChange('deadline')}/>

                <Typography variant="h6">Supplementary Materials:
                    <br/>
                    <FormControlLabel control=
                        {<Checkbox name= "resume" checked={this.state.resume} onChange={this.handleCheckedChange('resume')} value="resume" color="default"/>}
                    label="Resume"/>
                    <FormControlLabel control=
                        {<Checkbox name= "coverLetter" checked={this.state.coverLetter} onChange={this.handleCheckedChange('coverLetter')} value="coverLetter" color="default"/>}
                    label="Cover Letter"/>
                    <FormControlLabel control=
                        {<Checkbox name= "transcript" checked={this.state.transcript} onChange={this.handleCheckedChange('transcript')} value="transcript" color="default"/>}
                    label="Transcript"/>
                </Typography><br/>

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary">Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default JobPostingForm