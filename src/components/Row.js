import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Row extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { battleFieldRow, shoot, rowIndex, battleId } = this.props
    const battleFieldRowList = battleFieldRow.map((rowStatus, index) => {
      const colClass = classnames("column", {
        'playerHit': rowStatus.toString() === "4",
        'unknownWater': rowStatus.toString() === "0",
        'playerShip': rowStatus.toString() === "1",
        'playerMiss': rowStatus.toString() === "5",
        'enemyMiss': rowStatus.toString() === "6",
        'enemyHit': rowStatus.toString() === "3"
      })
      // key = row index, index = col index
      return <li className={ colClass } key={index} onClick={() => shoot(battleId, { coordinate: [rowIndex, index] } )}>{rowStatus}</li>
    });

    return (
      <div className="row">
        <ul>
          { battleFieldRowList }
        </ul>
      </div>
    )
  }
}

Row.PropTypes = {
  battleFieldRow: PropTypes.array,
  shoot: PropTypes.func
}

Row.defaultProps = {
  battleFieldRow: []
}
export default Row;
