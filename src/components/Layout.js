import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from './LeftPanel';

class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <LeftPanel />
      </div>
    )
  }
}

export default Layout;
