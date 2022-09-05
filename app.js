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
const stat = document.getElementById('stat');
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
    checkConditions()
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
        { return showWinner() }

    else if (gameState.board[3] !== null
        && gameState.board[3] === gameState.board[4]
        && gameState.board[3] === gameState.board[5])
        { return showWinner() }

    else if (gameState.board[6] !== null
        && gameState.board[6] === gameState.board[7]
        && gameState.board[6] === gameState.board[8])
        { return showWinner() }

    else if (gameState.board[0] !== null
        && gameState.board[0] === gameState.board[3]
        && gameState.board[0] === gameState.board[6])
        { return showWinner() }

    else if (gameState.board[1] !== null
        && gameState.board[1] === gameState.board[4]
        && gameState.board[1] === gameState.board[7])
        { return showWinner() }

    else if (gameState.board[2] !== null
        && gameState.board[2] === gameState.board[5]
        && gameState.board[2] === gameState.board[8])
        { return showWinner() }
        
    else if (gameState.board[0] !== null
        && gameState.board[0] === gameState.board[4]
        && gameState.board[0] === gameState.board[8])
        { return showWinner() }

    else if (gameState.board[2] !== null
        && gameState.board[2] === gameState.board[4]
        && gameState.board[2] === gameState.board[6])
        { return showWinner() }

    else if (gameState.board[0] && gameState.board[1] && gameState.board[2]
        && gameState.board[3] && gameState.board[4] && gameState.board[5]
        && gameState.board[6] && gameState.board[7] && gameState.board[8])
        { return stat.innerText = `Draw` }

    else { return } ;
}

const showWinner = () => {
    if (turn) {
        stat.innerText = `${turn} wins`;
    }
}

const reset = () => {
    window.location.reload();
}



// EVENT LISTENERS
cells.forEach((cell) => {
    cell.addEventListener("click", cellClick, { once: true });
    cell.addEventListener("click", changeTurn, { once: true });
})

resetButton.addEventListener("click", reset);



// enter our names and have them displayed
// have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser === refresh === cmd + r