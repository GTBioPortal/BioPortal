import React from 'react';

class JobPostingForm extends React.Component {

    render() {
        return (
            <form className = "job-posting">
                <label>Job Title:
                    <input name="job-title" type="text" placeholder="Job Title"/>
                </label><br/>

                <label>Company:
                    <input name="company" type="text" placeholder="Company"/>
                </label><br/>

                <label>Start Date:
                    <input name="start-date" type="text" placeholder="Start Date"/>
                </label><br/>

                <label>Job Description:
                    <textarea name="job-desc" placeholder="Job Description" />
                </label><br/>

                <label>Preferred Skills:
                    <textarea name="skills" placeholder="Preferred Skills" />
                </label><br/>

                <label>Application Deadline:
                    <input name="app-deadline" type="text" placeholder="Application Deadline" />
                </label><br/>

                <label>Supplementary Materials:
                    <label><input name="resume" type="checkbox"/> Resume</label>
                    <label><input name="cover-letter" type="checkbox" /> Cover Letter</label>
                    <label><input name="transcript" type="checkbox"/> Transcript</label>
                    <label><input name="other" type="checkbox"/> Other: <input name="other" type="text" placeholder="Other" /> </label>

                </label><br/>

                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default JobPostingForm