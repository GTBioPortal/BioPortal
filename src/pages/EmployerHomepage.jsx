import React from 'react';
import EmployerJobGrid from '../components/EmployerJobGrid';
import EmployerNavbar from '../components/EmployerNavbar';
import { withRouter, push } from 'react-router-dom';
import '../styles/app.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * EmployerHomePage renders EmployerJobGrid component which contains JobPostingCards
 * includes EmployerNavbar
 */
class EmployerHomePage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
           auth_token: this.props.location.data
        };
    }

    render() {
        return (
            <div>
                {/* Renders EmployerNavbar component */}
                <EmployerNavbar msgCount={0} notificationCount={0}/>

                {/* Renders EmployerJobGrid which contains JobPostingCards */}
                <EmployerJobGrid auth_token={this.state.auth_token}/>
            </div>
        );
    }
}

export default withRouter(EmployerHomePage);