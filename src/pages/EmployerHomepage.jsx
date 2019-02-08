import React from 'react';
import EmployerJobGrid from '../components/EmployerJobGrid';
import Navbar from '../components/Navbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EmployerHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar msgCount={0} notificationCount={0}/>
                <EmployerJobGrid />
            </div>
        );
    }
}

export default EmployerHomePage;