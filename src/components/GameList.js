import React, { Component } from 'react';
// import axios from 'axios';
import http from '../services/http';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getGames() {
    http.request(`/battles`, (response) => {
      const result = {
        data: response
      }
      this.setState(result)
    });
    console.log(this.state.data);
  }

  // componentDidMount() {
  //   axios.get(`zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battles`)
  //     .then(res => {
  //       const battles = res.data.data.children.map(obj => obj.data);
  //       this.setState({ battles });
  //       // console.log(battles);
  //     });
  // }

  render() {
    this.getGames()
    return (
      <div>List of games</div>
    )
  }
}

export default GameList;
