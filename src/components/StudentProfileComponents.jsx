import React from 'react';
import '../styles/employerJobPosting.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API from '../api/api';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

/**
 * Contains all the student profile components
 */
class StudentProfileComponents extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            name: null,
            email: localStorage.getItem("studentEmail"),
            resumes: [],
            anchorEl: null,
            selected_id: '',
            selected_resume: '',
            deleteFlag: false
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
            this.setState({ resumes: res.data.files });
            // console.log(this.state.resumes);
        });
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = (ev) => {
        this.setState({ anchorEl: null });  
    }

    handleClose(el) {
        this.setState({ 
            anchorEl: null,
            selected_id: el.id,
            selected_resume: el.name,
            deleteFlag: true
        });
        // console.log(this.state.selected_resume);
    };

    downloadResume = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id;
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get(url,
            {responseType: 'blob',
            headers: headers}
        ).then(res => {
            // console.log(res);
            var blob = new Blob(
                [res.data],
                {type: 'application/pdf'});
            const fileURL = URL.createObjectURL(blob);
            window.open(fileURL);
        })
        .catch(res => {
            // console.log(res);
        });
    };

    deleteResume = () => {
        var auth_token = localStorage.getItem('token');
        var authorize = 'Bearer ' + auth_token;
        var url = '/files/' + this.state.selected_id;
        // console.log(this.state.selected_id);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.delete(url,
            {headers: headers}
        ).then(res => {
            // console.log(res);
            window.location.reload();
            alert("Resume was deleted successfully!")
        }).catch(res => {
           // console.log(res);
           if (res.response.status == 500) {
               alert("Resume is linked to a job application. Unable to delete resume.");
           } else {
                alert("Resume was not deleted successfully!")
            }
        });
    }


    render()  {
        return (
            <div className={"profile"}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <br/>
                            <Typography variant="h4" align="center">Email: {this.state.email} </Typography>
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
                                  onClose={this.handleMenuClose}>
                                  {this.state.resumes.map((el, index) => {
                                    return <MenuItem key={index} onClick={() => this.handleClose(el)}> {el.name} </MenuItem>;
                                  })}
                                </Menu>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Link variant="subtitle1" align="center" onClick={this.downloadResume} gutterBottom>
                                    {this.state.selected_resume}
                                </Link>
                                {Boolean(this.state.deleteFlag) && <IconButton aria-label="Delete" onClick = {this.deleteResume}>
                                      <DeleteIcon/>
                                </IconButton>}

                            </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default StudentProfileComponents