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
      // key = row index, index = col index
      return <li className="column" key={index} onClick={() => shoot(battleId, { coordinate: [rowIndex, index] } )}>{rowStatus}</li>
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
