function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    random = "rock";
  } else if (random === 2) {
    random = "paper";
  } else {
    random = "scissors";
  }

  return random;
}

const container = document.querySelector("#container");
const buttons = document.querySelectorAll("img");
const playButton = document.querySelector("button");
const topContainer = document.querySelector("#top-container");
const textDiv = document.querySelector("#text-div");
playButton.classList.add("play-button");

let winner = document.createElement("p");
let roundsText = document.createElement("p");
let score = document.createElement("p");
let finalScore = document.createElement("p");
let resetDiv = document.createElement("div")
resetDiv.classList.add("restart-button-div")
const restartButton = document.createElement("button");

let userScore = 0;
let computerScore = 0;
let rounds = 1;

roundsText.classList.add("rounds-text");
score.classList.add("score-text");

function showWinner(message) {
  winner.textContent = message;
  textDiv.appendChild(winner);
}

function showScoreAndRounds(message) {
  roundsText.textContent = `Round ${message}`;
  score.textContent = `You ${userScore} x ${computerScore} Computer`;
  topContainer.appendChild(roundsText);
  topContainer.appendChild(score);
}

function showFinalScore(message) {
  finalScore.textContent = message;
  textDiv.appendChild(finalScore);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    winner.style.backgroundColor = "green"; 
    showWinner("You won! Rock beats scissors");
    userScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winner.style.backgroundColor = "green";
    showWinner("You won! Paper beats rock");
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winner.style.backgroundColor = "green";
    winner.style.color = 'white'
    showWinner("You won! Scissors beats paper");
    userScore++;
  } else if (playerSelection === computerSelection) {
    winner.setAttribute("style", "color: black; background: white");
    showWinner(`Draw! ${playerSelection} is friends with ${computerSelection}`);
  } else {
    winner.style.backgroundColor = "red";
    winner.style.color = 'white'
    showWinner(`You lost! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
  showScoreAndRounds(rounds)
}

function showResult() {
  if (userScore > computerScore) {
    showFinalScore(
      `Final score: You ${userScore} x ${computerScore} Computer`
    );
  } else if (computerScore > userScore) {
    showFinalScore(
      `Final score: You ${userScore} x ${computerScore} Computer`
    );
  } else {
    showFinalScore(
      `You ${userScore} x ${computerScore} Computer. This is a draw!`
    );
  }
}

function restartGame() {
  topContainer.appendChild(resetDiv);
  resetDiv.appendChild(playButton)
  playButton.textContent = "Restart game";
  playButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    winner.remove();
    score.remove();
    finalScore.remove();
    restartButton.remove();
  });
}

function playGame() {
  playButton.addEventListener("click", () => {
    playButton.remove();
    showScoreAndRounds(rounds)

    const startGame = function () {
      rounds++
      playRound(this.id, getComputerChoice());

      if (rounds >= 6) {
        buttons.forEach((button) => {
          button.removeEventListener("click", startGame);
          button.classList.remove("hover-class");
          button.style.opacity = "0.10";
        });
        showResult();
        restartGame();
        rounds = 1;
        showScoreAndRounds(5)
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", startGame);
      button.style.opacity = "2";
      button.classList.add("hover-class");  
    });
  });
}

playGame();
