// sudoku_solver.js

module.exports.parseBoard = function(board) {
  // split the board at each new line, and use map
  // to split each row into an array of characters
  return board.split('\n').map(function(row) {
    // use map to convert the characters into integers
    return row.split('').map(function(num) {
      return +num;
    })
  });
}

module.exports.saveEmptyPositions = function(board) {
  // create an array to save the positions
  var emptyPositions = [];

  // check every square in the puzzle for a zero
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      // if a zero is found, save that position
      if (board[i][j] === 0) {
        emptyPositions.push([i, j]);
      }
    }
  }

  // return the positions
  return emptyPositions;
};