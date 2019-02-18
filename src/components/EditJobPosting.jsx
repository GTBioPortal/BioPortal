import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class EditJobPosting extends React.Component {
    constructor(props){
        super(props)
    }

    jobTitleRef = React.createRef();
    companyRef = React.createRef();
    startDateRef = React.createRef();
    descRef = React.createRef();
    skillsRef = React.createRef();
    deadlineRef = React.createRef();
    resumeRef = React.createRef();
    clRef = React.createRef();
    transcriptRef = React.createRef();
    locationRef = React.createRef();


    createPosting = (event) => {
        // 1. Stop from submitting
        event.preventDefault();

        const posting = {
            jobTitle: this.jobTitleRef.current.value,
            company: this.companyRef.current.value,
            location: this.locationRef.current.value,
            startDate: this.startDateRef.current.value,
            jobDesc: this.descRef.current.value,
            skills: this.skillsRef.current.value,
            deadline: this.deadlineRef.current.value,
            resume: this.resumeRef.current.value,
            coverLetter: this.clRef.current.value,
            transcript: this.transcriptRef.current.value,
        }

        //this.props.addJobPosting(posting);

        // refresh form
        event.currentTarget.reset();

        console.log(posting)

    }

    state = {
        resume: false,
        coverLetter: false,
        transcript: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render()  {
        const job = this.props.vars.job
        console.log(job)
        return (
            <form className = "jobPosting" onSubmit={this.createPosting}>
            <br/>
            <Typography variant="h2" align="center">Position Information</Typography><br/>
                <Typography variant="h6">Job Title:<br/>
                    <input name="jobTitle" ref={this.jobTitleRef} type="text" placeholder={job.position}/>
                </Typography><br/>
                <Typography variant="h6">Company:<br/>
                    <input name="company" ref={this.companyRef} type="text" placeholder={job.company}/>
                </Typography><br/>

                <Typography variant="h6">Location<br/>
                    <input name="location" ref={this.locationRef} type="text" placeholder={job.location} />
                </Typography><br/>

                <Typography variant="h6">Start Date:<br/>
                    <input name="startDate" ref={this.startDateRef} type="text" placeholder="Start Date"/>
                </Typography><br/>

                <Typography variant="h6">Job Description:<br/>
                    <textarea name="jobDesc" ref={this.descRef} placeholder="Job Description" />
                </Typography><br/>

                <Typography variant="h6">Preferred Skills:<br/>
                    <textarea name="skills" ref={this.skillsRef} placeholder="Preferred Skills" />
                </Typography><br/>

                <Typography variant="h6">Application Deadline:<br/>
                    <input name="deadline" ref={this.deadlineRef} type="text" placeholder={job.deadline} />
                </Typography><br/>

                <Typography variant="h6">Supplementary Materials:
                    <br/>
                    <FormControlLabel control=
                        {<Checkbox name= "resume" checked={this.state.resume} onChange={this.handleChange('resume')} value="resume" color="default"/>}
                    label="Resume"/>
                    <FormControlLabel control=
                        {<Checkbox name= "coverLetter" checked={this.state.coverLetter} onChange={this.handleChange('coverLetter')} value="coverLetter" color="default"/>}
                    label="Cover Letter"/>
                    <FormControlLabel control=
                        {<Checkbox name= "transcript" checked={this.state.transcript} onChange={this.handleChange('transcript')} value="transcript" color="default"/>}
                    label="Transcript"/>
                </Typography><br/>

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary">Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default EditJobPosting