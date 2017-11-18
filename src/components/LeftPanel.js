import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class LeftPanel extends Component {
  render() {

    const { newBattle, allBattles } = this.props;
    const battleList = allBattles.map((battle, key) => {
      const { battleId } = battle
      return (
        <li key={ key }>{ battleId }</li>
      )
    })
    return (
      <div>
        <ul>
          { battleList }
        </ul>
        <button onClick={newBattle}>New Game</button>
      </div>
    )
  }
}

LeftPanel.PropTypes = {
  newBattle: PropTypes.func
}

LeftPanel.defaultProps = {
  newBattle: () => {
    return false
  },
  allBattles: []
}

export default LeftPanel;
