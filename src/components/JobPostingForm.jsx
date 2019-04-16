import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import API from '../api/api';


/**
 * JobPostingForm component allows employers to create a job posting by
 * inputting info into a form and creates prop
 */
class JobPostingForm extends React.Component {
     constructor(props) {
        super(props)
        // console.log(this.props);
    }

    createPosting = (event) => {
        // 1. Stop from submitting
        event.preventDefault();
        var dt = new Date();

        // creates posting prop
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

            created_at: dt.toUTCString(),
            author: this.state.author,
            author_id: this.state.author_id,
            id:this.state.id
        }

        // resets form to default onSubmit
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
        // this.setState({created_at: ''});
        this.setState({author: ''});
        this.setState({author_id: 0});
        this.setState({id: 0});

        var authorize = 'Bearer ' + localStorage.getItem('employer-token');
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.post('jobs/create', {
            title: posting.jobTitle,
            company: posting.company,
            resume: posting.resume,
            cover_letter: posting.coverLetter,
            transcript: posting.transcript,
            location: posting.location,
            start_date: posting.startDate + "T00:00:00.787Z",
            description: posting.desc,
            // skills: posting.skills,
            deadline: posting.deadline + "T00:00:00.787Z"},
            {headers: headers}
        ).then(res => {
            console.log(res);
      });

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
        author: '',
        author_id: 0,
        id: 0
    };

    // handles checkbox changes
    handleCheckedChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    // handles form changes
    handleChange = name => event => {
        this.setState({[name]: event.target.value,});
    };

    render()  {
        // console.log(this.props);
        return (
            <form className = "jobPosting" onSubmit={this.createPosting}>
            <br/>
            <Typography variant="h2" align="center">Position Information</Typography><br/>
                {/** @type {TextField} [Job Title text box] */}
                <TextField name="jobTitle" id="outlined-full-width-name" label="Job Title" placeholder="Job Title" fullWidth margin="normal"
                variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.jobTitle} onChange={this.handleChange('jobTitle')}/>

                {/** @type {TextField} [Company text box] */}
                <TextField name="company" id="outlined-full-width-name" label="Company" placeholder="Company Name"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.company} onChange={this.handleChange('company')}/>

                {/** @type {TextField} [location text box] */}
                <TextField name="location" id="outlined-full-width-name" label="Job Location" placeholder="e.g. Atlanta, Georgia"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.location} onChange={this.handleChange('location')}/>

                {/** @type {TextField} [startdate text box] */}
                <TextField name="startDate" id="outlined-full-width-name" label="Start Date" type="date"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.startDate} onChange={this.handleChange('startDate')}/>

                {/** @type {TextField} [Description text box] */}
                <TextField name="desc" id="outlined-full-width-name" label="Job Description" placeholder="Job Description"
                fullWidth margin="normal" variant="outlined" multiline rows="5"
                InputLabelProps={{shrink: true,}} value={this.state.desc} onChange={this.handleChange('desc')}/>

                {/** @type {TextField} [preferred skills text box] */}
                <TextField name="skills" id="outlined-full-width-name" label="Preferred Skills" placeholder="Preferred Skills"
                fullWidth margin="normal" variant="outlined"
                InputLabelProps={{shrink: true,}} value={this.state.skills} onChange={this.handleChange('skills')}/>

                {/** @type {TextField} [Deadline to apply text box] */}
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