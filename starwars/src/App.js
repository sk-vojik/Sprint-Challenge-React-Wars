import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import StarShipList from './components/StarshipList'

import './components/StarWars.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starships: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.getStarships('https://swapi.co/api/starships');
  }

  

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getStarships = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starships: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h2>Choose Your Character!</h2>
          <div className="list-container">
            <CharacterList characterDataList={this.state.starwarsChars}/>
         </div>
         <h2>Choose Your Starship!</h2>
          <div className="list-container">
            <StarShipList starshipDataList={this.state.starships} />
          </div>
      </div>
    );
  }
}

export default App;
