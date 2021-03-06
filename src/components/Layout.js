import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LeftPanel from './LeftPanel';
import Row from './Row';
import '../assets/style.scss';

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      allBattles: [],
      selectBattle: null
    };
  }

  newBattle() {
    axios.post('/battle')
      .then(response => {
        this.getBattles();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getBattles() {
    axios.get('/battle')
    .then( res=> {
      const { data } = res;
      this.setState({ allBattles: JSON.parse(data).battles });
    })
    .catch( error=> {
      console.log(error);
    });
  }

  selectBattle(id) {
    // console.log(id);
    axios.get(`/battle/${id}`)
    .then( res=> {
      const { data } = res;
      this.setState({ selectBattle: Object.assign({}, JSON.parse(data), { battleId: id }) });
    })
  }

  shoot(id, data) {
    console.log(id);
    axios.post(`/battle/${id}/fire`, { data })
      .then(res => {
        const selectBattle = Object.assign({}, res.data.battle, { battleId: id });
        this.setState({ selectBattle: Object.assign({}, { battle: res.data.battle }, { battleId: id }) });
      });
  }

  componentWillMount() {
    this.getBattles();
  }

  render() {
    const { allBattles, selectBattle } = this.state;
    let battleFieldGrid;

    if (selectBattle) {
      const { battle, battleId } = selectBattle;
      battleFieldGrid = battle.battlefield.map((row, key) => {
        return(
          <Row
           key={ key }
           rowIndex={ key }
           battleFieldRow={ row }
           shoot={ this.shoot.bind(this) }
           battleId={ battleId }
          />
        )
      })
    }
    return (
      <div className="wrapper">
        <LeftPanel
          newBattle={ this.newBattle.bind(this) }
          allBattles={ allBattles }
          setSelected={ this.selectBattle.bind(this) }
        />
        <div className="rowWrapper">
          { selectBattle ?
            <ul>
              { battleFieldGrid }
            </ul>
          : null }
        </div>
      </div>
    )
  }
}

export default Layout;
