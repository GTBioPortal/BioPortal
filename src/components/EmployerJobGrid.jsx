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

class EmployerJobGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            jobsPerPage: 10
        };
    }

    newPost = () => {
    const path = '/employerJobForm';
    this.props.history.push(path);
    }

    render() {
        const JOBS_PER_ROW = 5;
        const { page, jobsPerPage } = this.state;
        const totalJobs = this.props.jobs.length;
        const elemsToDisplay = ((page + 1) * jobsPerPage) > totalJobs ? totalJobs - (page * jobsPerPage) : jobsPerPage
        const rowsToDisplay = Math.ceil(elemsToDisplay / JOBS_PER_ROW);

        const renderRows = () => {
            let table = [];
            const jobsToShow = this.props.jobs.slice(page * jobsPerPage, page * jobsPerPage + elemsToDisplay);
            let row = [];
            for (let i = 0; i < elemsToDisplay; i++) {
                const job = this.props.jobs[page * jobsPerPage + i];
                row.push(
                    <TableCell
                        key={i}
                        padding='none'
                        className='card employer-job-card'
                        component={() => <EmployerJobCard job={job} />} >
                        <EmployerJobCard {...this.props} key={i} i={i} job={job} />
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
                <Table className='employer-job-grid'>
                    <TableBody>
                        {renderRows()}
                    </TableBody>
                </Table>
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

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    }
}



export default withRouter(connect(
    mapStateToProps,
    null
)(EmployerJobGrid));