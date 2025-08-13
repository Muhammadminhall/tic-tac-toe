const boxes = document.querySelectorAll(".square");
let turn = document.getElementById("status");
const reset = document
  .querySelector("#resetBtn")
  .addEventListener("click", () => resetGame());
let currPalyer = true;
let winnerFound = false;
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (currPalyer) {
      box.innerText = "X";
      turn.innerText = "O's turn";
      currPalyer = false;
      // turn = false;
    } else {
      box.innerText = "O";
      turn.innerText = "X's turn";
      currPalyer = true;
      // turn = true;
    }
    box.disabled = true;
    winner();
  });
  const disablebutton = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  const displayWinner = (player) => {
    const message = document.querySelector("#message");
    message.innerText = `${player} is the winner`;
    disablebutton();
  };
  const winner = () => {
    for (let pattern of winPattern) {
      const pattern1 = boxes[pattern[0]].innerText;
      const pattern2 = boxes[pattern[1]].innerText;
      const pattern3 = boxes[pattern[2]].innerText;

      if (pattern1 !== "" && pattern1 === pattern2 && pattern2 === pattern3) {
        winnerFound = true;
        displayWinner(pattern1);
        return;
      }
    }

    let allFilled = true;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].innerText === "") {
        allFilled = false;
        break;
      }
    }

    if (allFilled) {
      message.innerText = "Match Draw!";
      gameOver = true;
    }
  };
});

const resetGame = () => {
  for (let point of boxes) {
    point.innerText = "";
    point.disabled = false;
    message.innerText = "";
    turn.innerText = "X,s turn";
    currPalyer = true;
  }
};
