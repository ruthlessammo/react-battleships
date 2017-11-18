import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Row extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { battleFieldRow } = this.props
    const battleFieldRowList = battleFieldRow.map((rowStatus, key) => {
      return <li className="column" key={key}>{rowStatus}</li>
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
  battleFieldRow: PropTypes.array
}

Row.defaultProps = {
  battleFieldRow: []
}
export default Row;
