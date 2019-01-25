import React from 'react';
import '../styles/employerJobPosting.scss';

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
            <h1>Position Information</h1>
                <label>Job Title:<br/>
                    <input name="jobTitle" ref={this.jobTitleRef} type="text" placeholder="Job Title"/>
                </label><br/>
                <label>Company:<br/>
                    <input name="company" ref={this.companyRef} type="text" placeholder="Company"/>
                </label><br/>

                <label>Start Date:<br/>
                    <input name="startDate" ref={this.startDateRef} type="text" placeholder="Start Date"/>
                </label><br/>

                <label>Job Description:<br/>
                    <textarea name="jobDesc" ref={this.descRef} placeholder="Job Description" />
                </label><br/>

                <label>Preferred Skills:<br/>
                    <textarea name="skills" ref={this.skillsRef} placeholder="Preferred Skills" />
                </label><br/>

                <label>Application Deadline:<br/>
                    <input name="deadline" ref={this.deadlineRef} type="text" placeholder="Application Deadline" />
                </label><br/>

                <label>Supplementary Materials:
                    <label><input name="resume" ref={this.resumeRef} type="checkbox"/> Resume</label>
                    <label><input name="coverLetter" ref={this.clRef} type="checkbox" /> Cover Letter</label>
                    <label><input name="transcript" ref={this.transcriptRef} type="checkbox"/> Transcript</label>


                </label><br/>

                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default JobPostingForm