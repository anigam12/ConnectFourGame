import React, { Component } from 'react';
import './App.css';

import {checkWinner, checkMatch} from './Findwinner.js'

/*import {Hole, Squares} from './GridGeneration.js'*/

function Hole(props){
  return <div className="Hole"><div className={props.value}></div></div>
}

function Squares(props){
    return <div className="Squares" onClick={() => props.handleClick()}>
      {[...Array(props.holes.length)].map((x, j) => 
        <Hole key={j} value={props.holes[j]}></Hole>)}
      </div>
 }

class Board extends Component {

  constructor() {
    super();
    this.state = {
      boardState: new Array(7).fill(new Array(6).fill(null)),
      playerTurn: 'Red',
      gameMode: '',
      gameSelected: false,
      winner: ''
    }
  }

  selectedGame(mode){
    this.setState({
       gameMode: mode,
       gameSelected: true, 
       boardState: new Array(7).fill(new Array(6).fill(null))
    })
  }

  move(playermove){
    const boardCopy = this.state.boardState.map(function(arr) {
      return arr.slice();
    });
    if( boardCopy[playermove].indexOf(null) !== -1 ){
      let newmove = boardCopy[playermove]
      newmove[newmove.indexOf(null)] = this.state.playerTurn
      
      this.setState({
        playerTurn: (this.state.playerTurn === 'Red') ? 'Blue' : 'Red',
        boardState: boardCopy
      })
    }
  }



  /*Only make moves if winner doesn't exist*/
  handleClick(playermove) {
    if(this.state.winner === ''){
      this.move(playermove)
    }
  }
  
  /*check the winner*/
  componentDidUpdate(){
    let winner = checkWinner(this.state.boardState)
    if(this.state.winner !== winner){
      this.setState({winner: winner})
    } else {
       if(this.state.gameMode === 'ai' && this.state.playerTurn === 'Blue'){
        let validMove = -1;
        while(validMove === -1){
          let Squares = Math.floor((Math.random() * 7))
          if(this.state.boardState[Squares].indexOf(null) !== -1){
            validMove = Squares
          }else{
            validMove = -1
          }
        }
        this.move(validMove)
       }
    }
  }

  render(){

    /*If a winner exists display the name*/
    let result
    if(this.state.winner !== ""){
      result = "winnerMessage appear"
    }else {
      result = "winnerMessage"
    }

    /*Contruct tiles allocating column from board*/
    let tiles = [...Array(this.state.boardState.length)].map((x, i) => 
      <Squares 
          key={i}
          holes={this.state.boardState[i]}
          handleClick={() => this.handleClick(i)}
      ></Squares>
    )

    return (
      <div>
      
          <div className="Board">
            {tiles}
          </div>
      
        <div className={result}>{this.state.winner}</div>
        
          <div>
            <button onClick={() => this.selectedGame('human')}>Play Human</button>
            <button onClick={() => this.selectedGame('ai')}>Play AI</button>
          </div>
      
      </div>
    )
  }
}
export default Board;