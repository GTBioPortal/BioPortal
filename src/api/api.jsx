import axios from 'axios';
import React from 'react';


export default axios.create({
  baseURL: "http://bioportal.us-east-1.elasticbeanstalk.com/",
  headers: {'Content-Type': 'application/json'}
});