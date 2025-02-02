/* problems - 
 * can call restart game from console to cheat
 */

class Player {
    constructor(name, turn) {
        this.name = name;
        this.turn = turn;
        if (turn == 0) this.symbol = "X";
        else if (turn == 1) this.symbol = "O";
    }
}

class Game {
    constructor(name1, name2) {
        this.player1 = new Player(name1, 0);
        this.player2 = new Player(name2, 1);
        this.board;
    }

    initGame() {
        this.board = Array.from({ length: 9 }, (_, i) => i);
        this.turn = 0;
        this.showBoard();
    }

    showBoard() {
        const formContainer = document.getElementById('form-container');
        formContainer.innerHTML = '';

        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';

        const gameControls = document.getElementById('game-controls');
        gameControls.innerHTML = '<span id="display-turn"></span>';

        for (let i = 0; i < 9; ++i) {
            const button = document.createElement('button');
            button.innerHTML = " ";
            button.classList.add("marker");

            button.addEventListener('click', () => {
                this.getInput(i);
                button.innerHTML = this.board[i];
                button.disabled = true;
                this.displayTurn();
                setTimeout(() => this.checkWin(), 10);
            });
            gameBoard.appendChild(button);
        }
        this.appendControlButton("Restart", () => this.initGame(), gameControls);
        this.displayTurn();
    }

    appendControlButton(text, control, parentDiv) {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add("control-button");
        button.addEventListener('click', control);
        parentDiv.appendChild(button);
    }

    getInput(index) {
        if (this.board[index] == this.player1.symbol || this.board[index] == this.player2.symbol) {
            alert("Invalid Move");
        } else {
            const player = this.turn == 0 ? this.player1 : this.player2;
            this.board[index] = player.symbol;
            this.turn = (this.turn + 1) % 2;
        }
    }

    displayTurn() {
        const player = this.turn == 0 ? this.player1 : this.player2;
        document.getElementById('display-turn').textContent = `${player.name}'s turn`;
    }

    restartGame(result, player = null) {
        const gameControls = document.getElementById('game-controls');
        const buttons = document.getElementsByClassName('marker');
        if (result == 'win') {
            for (let button of buttons) {
                button.disabled = true;
            }
            gameControls.innerHTML = `<h2>${player.name} wins! Restart?</h2>`
        } else if (result == 'draw') {
            for (let button of buttons) {
                button.disabled = true;
            }
            gameControls.innerHTML = `<h2>Draw! Restart?</h2>`
        }
        const winControls = document.createElement('div')
        winControls.id = "win-controls";
        gameControls.appendChild(winControls);

        this.appendControlButton("Restart", () => this.initGame(), winControls);
        this.appendControlButton("Start New Game", () => startGame(), winControls);
        this.appendControlButton("Close", () => window.close(), winControls);
    }

    checkWin() {
        let winner;
        for (let i = 0; i < 3; ++i) {
            if (this.board[i * 3] === this.board[i * 3 + 1] && this.board[i * 3 + 1] === this.board[i * 3 + 2]) {
                // row 
                winner = [this.player1, this.player2].find(player => player.symbol === this.board[i * 3]);
                this.restartGame("win", winner);
            } else if (this.board[i] === this.board[i + 3] && this.board[i + 3] === this.board[i + 6]) {
                // column
                winner = [this.player1, this.player2].find(player => player.symbol === this.board[i]);
                this.restartGame("win", winner);
            }
        }
        // diagonal 
        if (this.board[0] === this.board[4] && this.board[4] === this.board[8] ||
            this.board[2] === this.board[4] && this.board[4] === this.board[6]
        ) {
            winner = [this.player1, this.player2].find(player => player.symbol === this.board[4]);
            this.restartGame("win", winner);
        }

        // draw
        if (this.board.every(cell => cell === "X" || cell === "O")) {
            this.restartGame("draw");
        }
    }
}

window.startGame = function () {
    document.getElementById('game-board').innerHTML = '';
    document.getElementById('game-controls').innerHTML = '';
    const startButton = document.createElement("button");
    startButton.textContent = "Start Game";
    startButton.classList.add("control-button");
    startButton.addEventListener('click', (event) => {
        renderForm();
        event.target.remove();
    });
    document.getElementById('form-container').appendChild(startButton);
}

function renderForm() {
    const formDiv = document.getElementById('form-container');
    const form = document.createElement('form');
    form.innerHTML = `
    <h2>Tic Tac Toe</h2>
    <div class="form-group">
        <label for="player1">Player 1</label>
        <input type="text" id="player1" required placeholder="Enter Player 1 Name">
    </div>
    <div class="form-group">
        <label for="player2">Player 2</label>
        <input type="text" id="player2" required placeholder="Enter Player 2 Name">
    </div>
    <div class="form-group">
        <button type="submit">Start</button>
    </div>
    `;
    formDiv.appendChild(form);
    form.onsubmit = (e) => {
        e.preventDefault();
        const player1 = document.getElementById('player1').value;
        const player2 = document.getElementById('player2').value;
        const game = new Game(player1, player2);
        console.log(game);
        game.initGame();
    }
}

startGame();