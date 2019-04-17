import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API from '../api/api';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


/**
 * Contains all the student profile components
 */
class StudentProfileComponents extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            name: null,
            email: localStorage.getItem("studentEmail"),
            resume_names: [],
            resume_ids: [],
            anchorEl: null,
            selected_id: ''
        };

        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        };
        API.get('student/files',
            {headers: headers}
        ).then(res => {
            // console.log(res.data.files);
            var temp_names = [];
            var temp_ids = [];
            for (var i = 0; i < res.data.files.length; i++) {
                temp_names.push(res.data.files[i].name);
                temp_ids.push(res.data.files[i].id);
            }
            this.setState({resume_names: temp_names});
            this.setState({resume_ids: temp_ids})
            // console.log(this.state);
        });
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (ev) => {
        this.setState({ anchorEl: null });
        var selectedResume = ev.nativeEvent.target.outerText;
        for (var i = 0; i < this.state.resume_names.length; i++) {
            if (this.state.resume_names[i] === selectedResume) {
                this.setState({ selected_id: this.state.resume_ids[i] });
            }
        }
    };

    render()  {
        return (
            <div className={"profile"}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <br/>
                            <Typography variant="h4" align="center">Email: {this.state.email}</Typography>
                            <br/>
                            <Grid container direction="row" justify="center" alignItems="center">
                                    <Button
                                      aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                                      aria-haspopup="true"
                                      onClick={this.handleClick}>
                                      Uploaded Resumes
                                    </Button>
                                    <Menu
                                      id="simple-menu"
                                      anchorEl={this.state.anchorEl}
                                      open={Boolean(this.state.anchorEl)}
                                      onClose={this.handleClose}>
                                      {this.state.resume_names.map((el, index) => {
                                        return <MenuItem key={index} onClick={this.handleClose}>{el}</MenuItem>;
                                      })}
                                    </Menu>
                            </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default StudentProfileComponents