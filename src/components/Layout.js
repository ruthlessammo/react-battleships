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
    console.log(id);
    axios.get(`/battle/${id}`)
    .then( res=> {
      const { data } = res;
      this.setState({ selectBattle: JSON.parse(data) });
    })
  }

  componentWillMount() {
    this.getBattles();
  }

  render() {
    const { allBattles, selectBattle } = this.state;
    let battleFieldGrid;

    if (selectBattle) {
      const { battle} = selectBattle;

      battleFieldGrid = battle.battlefield.map((row, key) => {
        return(
          <Row key={ key } battleFieldRow={ row }/>
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

        { selectBattle ?
          <ul>
            { battleFieldGrid }
          </ul>
        : null }
      </div>
    )
  }
}

export default Layout;
