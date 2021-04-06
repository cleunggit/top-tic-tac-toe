$(function() {
  Gameboard.init()
  playerFactory
});

// Gameboard module
const Gameboard = (() => {

  let gameBoard = [];
  
  const init = function () {
    getElements();
    render();
  }

  const getElements = () => {
    $cellElement = $('.cell');
    $gameBoard = $('.gameboard');
  };

  const render = () => {
    for (let i = 0; i < 9; i++) {
      const cell = $(`<div class="cell" data-cell></div>`)
      $gameBoard.append(cell)
    }
    $('.cell').one('click', handleClick)
    // $('.gameboard').addClass('x')
  }

  
  const handleClick = (e) => {
    const $cell = $(e.target);
    const currentClass = Game.player1Turn ? playerFactory.player1 : playerFactory.player2;
    Game.placeMark($cell, currentClass);
    swapTurns()
    console.log('player1turn', Game.player1Turn);
  }
  
  const swapTurns = () => {
    Game.player1Turn = !Game.player1Turn;
    $gameBoard.removeClass('x')
    $gameBoard.removeClass('circle')
    
    if (Game.player1Turn) {
      $gameBoard.addClass('x')
    } else {
      $gameBoard.addClass('circle')
    }
  }

  return {
    init,
    gameBoard,
  }
})();

// Player factory
  // store players in objects
const playerFactory = (() => {
  const player1 = 'x';
  const player2 = 'circle';

  return {
    player1: player1,
    player2: player2
  }
})();

const Game = (() => {
  let player1Turn = true
  console.log('Read Player 1');
  // Place markers on board
  const placeMark = (cell, currentClass) => {
    cell.addClass(currentClass)
  };
  


  return {
    placeMark,
    player1Turn: player1Turn
  }
})();


// Check for winning combinations
// 3 in a row or tie
// Clean up interface

// Allow players to enter their names
// Start/restart game button
// Display winner
