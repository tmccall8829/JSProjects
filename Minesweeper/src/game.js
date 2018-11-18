import { Board } from './board.js';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('You found a bomb! Game over.');
      this._board.print()
    } else if (!this._board.hasSafeTiles()) {
      console.log('Congrats, you win!');
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}
