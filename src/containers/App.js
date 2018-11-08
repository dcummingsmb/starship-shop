import React, { Component } from 'react';
import ShipList from '../components/ShipList';
import './App.css';

const ships = [];

class App extends Component {
  constructor() {
    super()
    this.state = {
      ships: ships
    }

    let i=0;
    //at time of writing this, 77 is the highest number assigned at SWAPI
    for(i = 1; i < 77; i++){
      this.getShip(i);
    }
  }

  getShip = async (shipId) => {
    const response = await fetch('https://swapi.co/api/starships/' + shipId + '/')
    const data = await response.json()
    if( data.detail === "Not found"){
      //do nothing
    } else {
        ships.push({
          name: data.name,
          model: data.model,
          manufacturer: data.manufacturer,
          cost: data.cost_in_credits
        })
        this.setState({ ships: ships })
    }
  }

  render() {
    const { ships } = this.state;

    if (ships.length === 0) {
      return( <h1>Loading...</h1>)
    } else {
      return (
        <div className='tc'>
          <h1 className='gold f1 jedi'>Starship Shop</h1>
          <h6 className='gray'>Ship data pulled from The Star Wars API <a href='https://swapi.co/'>https://swapi.co/</a></h6>
          <hr></hr><br></br>
          <div className='containerH'>
            <ShipList ships={ships}/>
          </div>
        </div>
      );
    }    
  }
}

export default App;