const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

//const p1Button = document.querySelector("#p1Button");
//const p2Button = document.querySelector("#p2Button");
//const p1Display = document.querySelector("#p1Display");
//const p2Display = document.querySelector("#p2Display");

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.getElementById("playTo");
let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener("change", () => {
  winningScore = parseInt(winningScoreSelect.value);
  reset();
});

function updateScores(player, opponent) {
  if (isGameOver === false) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
  p1.button.disabled = false;
  p2.button.disabled = false;
}
