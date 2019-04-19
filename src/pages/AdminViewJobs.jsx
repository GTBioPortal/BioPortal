import React from 'react';
import { hideUploadSnackbar } from '../actions/modals'
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import AdminNavbar from '../components/AdminNavbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';
import { bindActionCreators } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import API from '../api/api'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AdminJobCard from '../components/AdminJobCard';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

/**
 * Student homepage that contains job cards
 */
class AdminViewJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            jobs: this.props.location.data,
            jobsPerPage: 10
        }

        // console.log(this.state);
    }

    render() {

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
                            className='card job-card'
                            component={() => <AdminJobCard job={job} />} >
                            <AdminJobCard {...this.state.jobs} key={i} i={i} job={job} />
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
                /** call renderRows function to set table */
                <div>
                <AdminNavbar />
                <Table className='job-grid'>
                    <TableBody>
                        {renderRows()}
                    </TableBody>
                </Table>
                </div>
            );
        }
}

export default withRouter(AdminViewJobs);
