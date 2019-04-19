import axios from 'axios';
import React from 'react';

// set connection to backend using axios
export default axios.create({
  baseURL: "https://api.gtbioportal.com/",
  headers: {'Content-Type': 'application/json'}
});