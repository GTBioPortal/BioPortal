import React from 'react';
import BaseModal from '../containers/BaseModal';
import JobGrid from '../components/JobGrid';
import Navbar from '../components/Navbar';
import '../styles/app.scss';

const StudentHomePage = props => (
    <div>
        <Navbar msgCount={0} notificationCount={0}/>
        <JobGrid />
        <BaseModal />
    </div>
)


export default StudentHomePage;
