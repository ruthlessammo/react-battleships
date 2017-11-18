import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LeftPanel from './LeftPanel';
import '../assets/style.scss';

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      allBattles: []
    };
  }

  newBattle() {
    axios.post('/battle')
      .then(response => {
        console.log(response);
        this.getBattles();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getBattles() {
    axios.get('/battle', {
      headers: {
        'x-api-key': process.env.X_API_KEY
      }
    })
    .then( res=> {
      const { data } = res;
      this.setState({ allBattles: JSON.parse(data).battles });
    })
    .catch( error=> {
      console.log(error);
    });
  }

  componentWillMount() {
    this.getBattles();
  }

  render() {

    const { allBattles } = this.state;

    return (
      <div className="wrapper">
        <LeftPanel
          newBattle={ this.newBattle.bind(this) }
          allBattles={ allBattles }
        />
      </div>
    )
  }
}

export default Layout;
