// sudoku_solver_spec.js

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var solver = require('../solver');

describe('Sudoku Solver', function() {

  var board = '090000006\n' + 
              '000960485\n' +
              '000581000\n' +
              '004000000\n' +
              '517200900\n' +
              '602000370\n' +
              '100804020\n' +
              '706000810\n' +
              '300090000';

  var parsedBoard;

  describe('#parseBoard', function() {
    it('should parse a sudoku board into a 2D array', function() {

      parseBoard = parseBoard(board);
      var expectedBoard = [
        [0,9,0,0,0,0,0,0,6],
        [0,0,0,9,6,0,4,8,5],
        [0,0,0,5,8,1,0,0,0],
        [0,0,4,0,0,0,0,0,0],
        [5,1,7,2,0,0,9,0,0],
        [6,0,2,0,0,0,3,7,0],
        [1,0,0,8,0,4,0,2,0],
        [7,0,6,0,0,0,8,1,0],
        [3,0,0,0,9,0,0,0,0]       
      ];

      expect(parseBoard.length).to.equal(9);
      expect(parseBoard[0].length).to.equal(9);
      expect(parseBoard).to.eql(expectedBoard);
    });
  });

});