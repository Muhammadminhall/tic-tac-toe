const status = document.getElementById("status");
const box = document.querySelectorAll(".square");
const message = document.querySelector("#message");
const reset = document
  .getElementById("resetBtn")
  .addEventListener("click", () => {
    resetGame();
  });

const winnigPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currPalyer = true;
let gameOver = false;

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (currPalyer) {
      box.innerHTML = "x";
      currPalyer = false;
    } else {
      box.innerHTML = "o";
      currPalyer = true;
    }
    box.disabled = true;
    winner();
  });
});

const dispaly = (player) => {
  message.innerHTML = `${player} is winner`;
  disablebutton();
};
const disablebutton = () => {
  for (let point of box) {
    point.disabled = true;
  }
};
const resetGame = () => {
  for (let point of box) {
    point.innerText = "";
    point.disabled = false;
  }
};

const winner = () => {
  for (let pattern of winnigPosition) {
    let pattern1 = box[pattern[0]].innerText;
    let pattern2 = box[pattern[1]].innerText;
    let pattern3 = box[pattern[2]].innerText;
    // console.log(pattern1, pattern2, pattern3);
    if ((pattern1 != "", pattern2 != "", pattern3 != "")) {
      if (pattern1 == pattern2 && pattern2 == pattern3) {
        console.log("winner", pattern1);
        dispaly(pattern1);
      }
    }
  }
};
