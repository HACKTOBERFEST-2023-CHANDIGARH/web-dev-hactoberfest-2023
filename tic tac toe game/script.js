let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateMessage();
        checkWin();
        playMoveSound(); // Call the function to play the sound
    }
}

function playMoveSound() {
    const moveSound = document.getElementById('moveSound');
    moveSound.play();
}


function updateMessage() {
    const message = document.querySelector('.message');
    if (gameActive) {
        message.textContent = `Current turn: ${currentPlayer}`;
    } else {
        if (!gameBoard.includes('') && !checkWinner('X') && !checkWinner('O')) {
            message.textContent = "It's a draw!";
        } else {
            message.textContent = `${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
        }
    }
}

function checkWin() {
    if (checkWinner('X') || checkWinner('O')) {
        gameActive = false;
    } else if (!gameBoard.includes('')) {
        gameActive = false;
    }
    updateMessage();
}

function checkWinner(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] === player && gameBoard[b] === player && gameBoard[c] === player) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }

    updateMessage();
}

resetBoard();
