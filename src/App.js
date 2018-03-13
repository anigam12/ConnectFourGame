import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h1>CONNECT 4</h1>
        </div>
        <div className="Game">
          <Board/>
        </div>
      </div>
    );
  }
}



export default App;