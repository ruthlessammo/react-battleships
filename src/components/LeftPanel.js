import React, { Component, PropTypes } from 'react';
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

// LeftPanel.propTypes = {
//   newBattle: propTypes.func
// }

LeftPanel.defaultProps = {
  newBattle: () => {
    return false
  },
  allBattles: []
}

export default LeftPanel;
