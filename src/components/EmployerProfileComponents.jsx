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
class EmployerProfileComponents extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            email: localStorage.getItem("employerEmail"),
        };
    }


    render()  {
        return (
            <div className={"profile"}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <br/>
                            <Typography variant="h4" align="center">Email: {this.state.email}</Typography>
                            <br/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default EmployerProfileComponents