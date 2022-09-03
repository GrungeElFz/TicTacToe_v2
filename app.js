// STATE
const gameState = {
    players: ['x', 'o'],
    board: [
      null, null, null,
      null, null, null,
      null, null, null
    ]
  };

let turn = gameState.players[0];


// DOM SELECTORS
const cells = document.querySelectorAll('.cell');
const bottomArea = document.getElementById('bottom');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset_Btn');


// HELPER FUNCTIONS
const cellClick = (event) => {
    const cell = event.target;
    const cellIndex = cell.dataset.index;

    if (turn === gameState.players[0]) {
        cell.innerText = gameState.players[0]
        gameState.board[cellIndex] = gameState.players[0]
        turn = gameState.players[0]
    } else {
        cell.innerText = gameState.players[1]
        gameState.board[cellIndex] = gameState.players[1]
        turn = gameState.players[1]
    }

    cell.innerText = `${turn}`
}

const changeTurn = (event) => {
    turn === gameState.players[0]
    ? turn = gameState.players[1]
    : turn = gameState.players[0]
}


// EVENT LISTENERS
cells.forEach((cell) => {
    cell.addEventListener("click", cellClick, { once: true });
    cell.addEventListener("click", changeTurn, { once: true });
})

