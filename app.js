// STATE
const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  };

let turn = gameState.players[0];


// DOM SELECTORS
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const reset = document.getElementById('reset_Btn');


// HELPER FUNCTIONS
const cellClick = (event) => {
    const cell = event.target;
    console.log(cell);
    
    cell.innerHTML = `${turn}`
}

const changeTurn = (event) => {
    if (turn === gameState.players[0]) {
        turn = gameState.players[1]
    } else {
        turn = gameState.players[0]
    }
}


// EVENT LISTENERS
cells.forEach((cell) => {
    cell.addEventListener("click", cellClick, { once: true });
    cell.addEventListener("click", changeTurn, { once: true });
})

