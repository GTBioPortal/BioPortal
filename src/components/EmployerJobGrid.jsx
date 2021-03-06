import React from 'react';
import EmployerJobCard from './EmployerJobCard';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { withRouter, push } from 'react-router-dom';
import '../styles/job-grid.scss';
import API from '../api/api'

/**
 * EmployerJobGrid component shows all of employers job postings
 */
class EmployerJobGrid extends React.Component {
    // set states
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            jobsPerPage: 10,
            jobs: []
        };
    }

    componentDidMount() {
        var auth_token = localStorage.getItem('employer-token');
        var authorize = 'Bearer ' + auth_token
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': authorize
        }
        API.get('employer/jobs', {headers: headers}).then(res => {
            console.log(res);
            var allJobs = res.data.jobs;
            this.setState({ jobs: allJobs });
      })
    }

    // function to go to create a new job page
    newPost = () => {
        // console.log(this.props.location.data)
    const path = '/employerJobForm';
    this.props.history.push({
            pathname: path,
            data: this.props.location.data
        });
    }

    render() {
        /** set number of jobs per row and number of rows/jobs per row based
            on total number of job postings */
        const JOBS_PER_ROW = 5;
        const { page, jobsPerPage } = this.state;
        const totalJobs = this.state.jobs.length;
        const elemsToDisplay = ((page + 1) * jobsPerPage) > totalJobs ? totalJobs - (page * jobsPerPage) : jobsPerPage
        const rowsToDisplay = Math.ceil(elemsToDisplay / JOBS_PER_ROW);

        /** function to get specific jobs and show them on grid */
        const renderRows = () => {
            let table = [];
            const jobsToShow = this.state.jobs.slice(page * jobsPerPage, page * jobsPerPage + elemsToDisplay);
            let row = [];
            for (let i = 0; i < elemsToDisplay; i++) {
                const job = this.state.jobs[page * jobsPerPage + i];
                row.push(
                    <TableCell
                        key={i}
                        padding='none'
                        className='card employer-job-card'
                        component={() => <EmployerJobCard job={job} />} >
                        <EmployerJobCard {...this.state.jobs} key={i} i={i} job={job} />
                    </TableCell>
                );
                if ((i + 1) % 5 == 0) {
                    table.push(
                        <TableRow key={table.length}>
                            {row}
                        </TableRow>
                    );
                    row = [];
                }

            }
            if (row.length !== 0) {
                table.push(row);
            }
            return table;

        }

        return (
            <div>
                {/** call renderRows function to set table */}
                <Table className='employer-job-grid'>
                    <TableBody>
                        {renderRows()}
                    </TableBody>
                </Table>
                {/** add button to call newPost function when clicked */}
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing='15'>
                  <Grid item xs={12}>
                       <Fab onClick={this.newPost} align="center" color="primary" aria-label="Add">
                            <AddIcon />
                        </Fab>
                  </Grid>
                </Grid>
            </div>

        );
    }
}

// map states to props
function mapStateToProps(state) {
    return {
        jobs: state.jobs
    }
}

// export component for use/routing
export default withRouter(connect(
    mapStateToProps,
    null
)(EmployerJobGrid));
