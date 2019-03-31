import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

/**
 * EditJobPostingForm component allows employers to edit information into a
 * form and updates job posting prop
 */
class EditJobPostingForm extends React.Component {

    /* Creates prop for job posting*/
    createPosting = (event) => {
        // 1. Stop from submitting
        event.preventDefault();

        // 2. creates job posting prop
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

        // 3. resets form to default after submitting
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

        // prints posting to console (for testing purposes, delete later)
        console.log(posting);

    }

    // default state
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

    // handles changes for checkboxes
    handleCheckedChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    // handles changes for all other form types
    handleChange = name => event => {
        this.setState({[name]: event.target.value,});
    };

    render()  {
        const job = this.props.vars.job
        return (
            <form className = "jobPosting" onSubmit={this.createPosting}>
            <br/>
            <Typography variant="h2" align="center">Position Information</Typography><br/>

                <TextField name="jobTitle" id="outlined-full-width-name" label="Job Title" placeholder={job.position} fullWidth margin="normal"
                variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.jobTitle} onChange={this.handleChange('jobTitle')}/>

                <TextField name="company" id="outlined-full-width-name" label="Company" placeholder={job.company}
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.company} onChange={this.handleChange('company')}/>

                <TextField name="location" id="outlined-full-width-name" label="Job Location" placeholder={job.location}
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.location} onChange={this.handleChange('location')}/>

                <TextField name="startDate" id="outlined-full-width-name" label="Start Date" type="date" placeholder={job.start_date}
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.startDate} onChange={this.handleChange('startDate')}/>

                <TextField name="desc" id="outlined-full-width-name" label="Job Description" placeholder={job.description}
                fullWidth margin="normal" variant="outlined" multiline rows="5"
                InputLabelProps={{shrink: true,}} value={this.state.desc} onChange={this.handleChange('desc')}/>

                <TextField name="skills" id="outlined-full-width-name" label="Preferred Skills" placeholder={job.skills}
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.skills} onChange={this.handleChange('skills')}/>

                <TextField name="deadline" id="outlined-full-width-name" label="Application Deadline" type="date" placeholder={job.deadline}
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

export default EditJobPostingForm