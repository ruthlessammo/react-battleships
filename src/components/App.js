import React, { Component } from 'react';
import NewGame from './NewGame';
import GameList from './GameList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>BattleShips</h1>
        <GameList />
        <NewGame />
      </div>
    )
  }
}

export default App;
