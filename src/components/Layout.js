import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LeftPanel from './LeftPanel';
import '../assets/style.scss';



class Layout extends Component {
  componentWillMount() {
    axios.get('https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle', {
      headers: {
          'x-api-key': process.env.X_API_KEY
      }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
      <div className="wrapper">
        <LeftPanel />
      </div>
    )
  }
}

export default Layout;
