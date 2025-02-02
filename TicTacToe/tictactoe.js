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
        if (turn == 1) this.symbol = "X";
        else if (turn == 2) this.symbol = "O";
    }
}

class Game {
    constructor(name1, name2) {
        this.player1 = new Player(name1, 1);
        this.player2 = new Player(name2, 2);

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
}