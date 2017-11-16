import React, { Component } from 'react';

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  newGame() {
    return {}
  }

  render() {
    return (
      <button
        className="btn btn-primary"
        onClick={() => this.newGame()}
      >
        New game
      </button>
    )
  }
}

export default NewGame;
