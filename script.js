$(function() {
  Gameboard.init()
});

// Gameboard module
const Gameboard = (() => {

  // store gameboard as an array
  let gameBoard = [];
  
  const init = function () {
    getElements();
    render();
  }

  const getElements = () => {
    $gridElement = $('#grid');
  };

  const render = () => {
    for (let i = 0; i < 9; i++) {
      const gridCell = `<div id="grid-${i}">${i}</div>`;
      // const gridCell = '<div>';

      $gridElement.append(gridCell);
      gameBoard.push(gridCell)
    }
  }

  return {
    init,
    gameBoard
  }
})();

// Player factory
  // store players in objects

// Place markers on board

// Check for winning combinations
// 3 in a row or tie
// Clean up interface

// Allow players to enter their names
// Start/restart game button
// Display winner
