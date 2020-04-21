import React, { Component } from 'react';
import logo from './logo.svg';
import Tacos from './components/Tacos/Tacos';
import TacoSelector from './components/TacoSelector/TacoSelector';
import './App.css';

const tacoNo = ['0', '1', '2', '3'];

class App extends Component {
  
  state = {
    tacoIdx: 0
  };

  handleTacoSelection = (newIdx) => {
    this.setState({tacoIdx: newIdx});
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">Crunch a Taco!</header>
        <main>
          <TacoSelector 
            tacoNo={tacoNo}
            tacoIdx={this.state.tacoIdx}
            handleTacoSelection={this.handleTacoSelection}
          />
          <Tacos 
            tacoNo={tacoNo}
            tacoIdx={this.state.tacoIdx}
            handleTacoSelection={this.handleTacoSelection}
          />
        </main>
      </div>
    )
  }
} 

export default App;