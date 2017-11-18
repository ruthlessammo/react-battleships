import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LeftPanel from './LeftPanel';
import '../assets/style.scss';



class Layout extends Component {
  componentWillMount() {
    axios.get('/battle', {
      headers: {
          'x-api-key': process.env.X_API_KEY
      }
  })
  .then( response=> {
    console.log(response);
  })
  .catch( error=> {
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
