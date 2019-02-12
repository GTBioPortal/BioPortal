import React from 'react';
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import Navbar from '../components/Navbar';
import Button from '@material-ui/core/Button';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';

import { connect } from 'react-redux';

class MainHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.studentHomepage = this.studentHomepage.bind(this);
        this.employerLoginpage = this.employerLoginpage.bind(this);
    }

    studentHomepage() {
        const path = '/student/' + 'sampleStudent';
        this.props.history.push(path);
    }

    employerLoginpage() {
        const path = '/employer';
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <Button variant='contained'
                            color='primary'
                            onClick={this.studentHomepage}>
                            Student
                        </Button>
                <Button variant='contained'
                            color='primary'
                            onClick={this.employerLoginpage}>
                            Employer
                        </Button>
            </div>
        );
    }
}

export default withRouter (MainHomepage);
