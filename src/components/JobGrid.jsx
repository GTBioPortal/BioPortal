import React from 'react';
import JobCard from './JobCard';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import '../styles/job-grid.scss';

/**
 * JobGrid component shows all available job postings
 */
class JobGrid extends React.Component {
    // set states 
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            jobsPerPage: 10
        };
    } 
    
    render() {
        // set number of jobs per row and number of rows/jobs per row based on total number of job postings
        const JOBS_PER_ROW = 5;
        const { page, jobsPerPage } = this.state;
        const totalJobs = this.props.jobs.length;
        const elemsToDisplay = ((page + 1) * jobsPerPage) > totalJobs ? totalJobs - (page * jobsPerPage) : jobsPerPage 
        const rowsToDisplay = Math.ceil(elemsToDisplay / JOBS_PER_ROW);

        // function to get specific jobs and show them on grid
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
                        className='card job-card'
                        component={() => <JobCard job={job} />} >
                        <JobCard {...this.props} key={i} i={i} job={job} />
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
            // call renderRows function to set table 
            <Table className='job-grid'>
                <TableBody>
                    {renderRows()}
                </TableBody>
            </Table>
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
export default connect(
    mapStateToProps,
    null
)(JobGrid);
