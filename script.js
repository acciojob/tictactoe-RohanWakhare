//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";

const board = Array(9).fill("");

submitBtn.addEventListener("click", () => {
    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    if (!player1 || !player2) return;

    document.getElementById("player-form").style.display = "none";
    document.getElementById("game").style.display = "block";

    currentPlayer = player1;
    message.textContent = `${player1}, you're up`;
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (cell.textContent !== "") return;

        cell.textContent = currentSymbol;
        board[index] = currentSymbol;

        if (checkWinner()) {
            message.textContent =
                `${currentPlayer} congratulations you won!`;
            return;
        }

        if (currentSymbol === "X") {
            currentSymbol = "O";
            currentPlayer = player2;
        } else {
            currentSymbol = "X";
            currentPlayer = player1;
        }

        message.textContent = `${currentPlayer}, you're up`;
    });
});

function checkWinner() {
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let pattern of wins) {
        const [a, b, c] = pattern;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            return true;
        }
    }

    return false;
}