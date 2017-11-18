import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class LeftPanel extends Component {
  render() {

    const { newBattle, allBattles, setSelected } = this.props;

    const battleList = allBattles.map((battle, key) => {
      const { battleId } = battle;
      return (
        <li onClick={()=> setSelected(battleId) } key={ key }>{ battleId }</li>
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
  newBattle: PropTypes.func,
  selectBattle: PropTypes.func,
  allBattles: PropTypes.array
}

LeftPanel.defaultProps = {
  newBattle: () => {
    return false
  },
  selectBattle: () => {
    return false
  },
  allBattles: []
}

export default LeftPanel;
