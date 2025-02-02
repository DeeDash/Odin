/* DOM MANIPULATION
 * function to render board 
 * function to display turn 
 * based on turn, when block is clicked, input the player value
 * render reset button when game is over, and then render board again
 */

/* GAME LOGIC
 * switch turns
 * current turn inputs corresponding cell
 * if a[i][0..3] or a[0..3][j] or a[i..][j..] st i == j is the same, then that player wins
 * can check for win after move 5, no need to check after every turn
 */

/* problems - 
 * can call restart game from console to cheat
 */

/* console version */

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
        this.board = Array.from({ length: 9 }, (_, i) => (i + 1).toString());
        console.clear()
        this.turn = 0;
        this.showBoard();
    }

    showBoard() {
        console.log(
            `${this.board[0]} | ${this.board[1]} | ${this.board[2]}\n` +
            `---------\n` +
            `${this.board[3]} | ${this.board[4]} | ${this.board[5]}\n` +
            `---------\n` +
            `${this.board[6]} | ${this.board[7]} | ${this.board[8]}\n`
        );
    }
    getInput(index) {
        if (this.board[index - 1] == this.player1.symbol || this.board[index - 1] == this.player2.symbol) {
            alert("Invalid Move");
            this.showBoard();
        } else {
            const player = this.turn == 0 ? this.player1 : this.player2;
            this.board[index - 1] = player.symbol;
            this.turn = (this.turn + 1) % 2;
            this.showBoard();
            this.checkWin();
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

const game = new Game("Alice", "Bob");
game.startGame();