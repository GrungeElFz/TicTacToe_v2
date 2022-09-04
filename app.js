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

const checkConditions = () => {
    if (gameState.board[0] !== null
        && gameState.board[0] === gameState.board[1]
        && gameState.board[0] === gameState.board[2])
        { return console.log('First row') }

    else if (gameState.board[3] !== null
        && gameState.board[3] === gameState.board[4]
        && gameState.board[3] === gameState.board[5])
        { return console.log('Second row') }

    else if (gameState.board[6] !== null
        && gameState.board[6] === gameState.board[7]
        && gameState.board[6] === gameState.board[8])
        { return console.log('Third row') }

    else if (gameState.board[0] !== null
        && gameState.board[0] === gameState.board[4]
        && gameState.board[0] === gameState.board[8])
        { return console.log('\ Diagonal') }

    else if (gameState.board[2] !== null
        && gameState.board[2] === gameState.board[4]
        && gameState.board[2] === gameState.board[6])
        { return console.log('/ Diagonal') }

    else if (gameState.board[0] && gameState.board[1] && gameState.board[2]
        && gameState.board[3] && gameState.board[4] && gameState.board[5]
        && gameState.board[6] && gameState.board[7] && gameState.board[8])
        { return console.log('Draw') }
}


// EVENT LISTENERS
cells.forEach((cell) => {
    cell.addEventListener("click", cellClick, { once: true });
    cell.addEventListener("click", changeTurn, { once: true });
})

