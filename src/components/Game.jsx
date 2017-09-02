import React, { Component } from "react";
import Board from "./Board";
import rand from "../scripts/random";

class Game extends Component {
  constructor(props) {
    super(props);
    this.placeShip = this.placeShip.bind(this);
    this.writeShip = this.writeShip.bind(this);

    this.state = {
      board: this.newBoard()
    }
  }

  componentDidMount() {
    this.placeShips();
  }

  newBoard() {
    let b = []
    for (let r = 0; r < 16; r++) {
      let row = []
      for (let c = 0; c < 16; c++) {
        row.push(null);
      }
      b.push(row);
    }
    return (b);
  }

  placeShips() {
    var ships = [
      {sym: 'A', length: 5},
      {sym: 'B', length: 4},
      {sym: 'S', length: 3},
      {sym: 'D', length: 3},
      {sym: 'C', length: 3},
      {sym: 'P', length: 2} ];
    
    for (let i = 0; i < 5; i++) {
      let s = ships.splice(rand(ships.length), 1)[0];
      this.placeShip(s);
    }
  }

  placeShip(ship) {
    let dir, placed, coords;
    dir = ['hor','ver'].splice(rand(2), 1)[0];
    placed = false;

    while (!placed) {
      coords = {
        row: rand(16),
        col: rand(16)
      }
      if (this.isPlaceable(coords, ship, dir)) {
        this.writeShip(coords, ship, dir);
        placed = true;
      };
    }
  }

  writeShip(coords, ship, dir) {
    let b = this.state.board;
    for (let i = 0; i < ship.length; i++) {
      if (dir === 'hor') {
        b[coords.row][coords.col + i] = ship.sym;
      } else {
        b[coords.row + i][coords.col] = ship.sym;
      }
    }
    this.setState({
      board: b
    });
  }

  isPlaceable(coords, ship, dir) {
    if (dir === 'hor') {
      if (coords.col + ship.length < 16 && this.isVacantH(coords, ship)) {
        return true;
      }
    } else {
      if (dir === 'ver' && coords.row + ship.length < 16 && this.isVacantV(coords, ship)) {
        return true;
      }
    }
    return false;
  }

  isVacantH(coords, ship) {
    if (!this.state.board[coords.row].slice(coords.col, coords.col + ship.length).some(c => c !== null)) {
      return true;
    }
    return false;
  }

  isVacantV(coords, ship) {
    for (let i = 0; i < ship.length; i++) {
      if (this.state.board[coords.row + i][coords.col]) {
        return false;
      }
    }
    return true;
  }
  
  render() {
    return(
      <Board board={this.state.board}/>
    )
  }
}

export default Game;