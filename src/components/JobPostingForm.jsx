import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class JobPostingForm extends React.Component {

    jobTitleRef = React.createRef();
    companyRef = React.createRef();
    startDateRef = React.createRef();
    descRef = React.createRef();
    skillsRef = React.createRef();
    deadlineRef = React.createRef();
    resumeRef = React.createRef();
    clRef = React.createRef();
    transcriptRef = React.createRef();

    createPosting = (event) => {
        // 1. Stop from submitting
        event.preventDefault();

        const posting = {
            jobTitle: this.jobTitleRef.current.value,
            company: this.companyRef.current.value,
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

    render()  {
        return (
            <form className = "jobPosting" onSubmit={this.createPosting}>
            <br/>
            <Typography variant="h2" align="center">Position Information</Typography><br/>
                <Typography variant="h6">Job Title:<br/>
                    <input name="jobTitle" ref={this.jobTitleRef} type="text" placeholder="Job Title"/>
                </Typography><br/>
                <Typography variant="h6">Company:<br/>
                    <input name="company" ref={this.companyRef} type="text" placeholder="Company"/>
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
                    <input name="deadline" ref={this.deadlineRef} type="text" placeholder="Application Deadline" />
                </Typography><br/>

                <Typography variant="h6">Supplementary Materials:
                    <Typography><input name="resume" ref={this.resumeRef} type="checkbox"/> Resume</Typography>
                    <Typography><input name="coverLetter" ref={this.clRef} type="checkbox"/> Cover Letter</Typography>
                    <Typography><input name="transcript" ref={this.transcriptRef} type="checkbox"/> Transcript</Typography>

                </Typography><br/>

                <Button size='large' type="submit" variant="contained" fullWidth={true} className="submit" color="secondary">Submit</Button>

                <div><br/></div>

            </form>
        )
    }
}

export default JobPostingForm