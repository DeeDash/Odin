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
    startGame() {
        this.board = Array.from({ length: 9 }, (_, i) => i);
        this.turn = 0;
        this.showBoard();

    }

    showBoard() {
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = "";
        for (let i = 0; i < 9; ++i) {
            const button = document.createElement('button');
            button.innerHTML = " ";

            button.addEventListener('click', () => {
                this.getInput(i);
                button.innerHTML = this.board[i];
                button.disabled = true;
                setTimeout(() => this.checkWin(), 10);
            });

            gameBoard.appendChild(button);
        }

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
    restartGame(result, player = null) {
        let userInput;
        if (result == "win") {
            userInput = prompt(`${player.name} wins! Restart?`)
        } else {
            userInput = prompt(`Draw. Restart?`)
        }

        if (userInput === 'y') this.startGame();
        else window.close();
    }
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
        <button type="submit">Start Game</button>
    </div>
    `;
    formDiv.appendChild(form);
    form.onsubmit = (e) => {
        e.preventDefault();
        const player1 = document.getElementById('player1').value;
        const player2 = document.getElementById('player2').value;
        const game = new Game(player1, player2);
        console.log(game);
        game.startGame();
    }
}