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
        this.turn = 0;
        this.gameOver = false;
        this.startGame();
    }
    startGame() {
        this.board = Array.from({ length: 9 }, (_, i) => (i + 1).toString());
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
        if (this.board[index] == this.player1.symbol || this.board[index] == this.player2.symbol) {
            alert("Invalid Move");
            this.getInput(player, index);
        } else {
            const player = this.turn === 0 ? this.player1 : this.player2;
            this.board[index - 1] = player.symbol;
            this.showBoard();
            this.checkWin();
            this.turn = (this.turn + 1) % 2;
        }
    }
    checkWin() {

    }
}

const game = new Game("Alice", "Bob");