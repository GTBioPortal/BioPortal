import API from '../api/api'
import React from 'react';


export default class JobList extends React.Component {
  componentDidMount() {

    API.get('jobs/')
      .then(res => {
        var jobs = res.data.jobs;
        console.log(jobs);
        // console.log(res.data);
      })
  }

  render() {
    return(
      <ul>
      </ul>
      );
  }
}