function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    random = "rock";
  } else if (random === 2) {
    random = "paper";
  } else {
    random = "scissors";
  }

  return random.toLowerCase();
}

let userScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
const buttons = document.querySelectorAll("img");
const playButton = document.querySelector('button')
const buttonContainer = document.querySelector('#button-container')
const textDiv = document.querySelector('#text-div')
playButton.classList.add('play-button')

let winner = document.createElement("p");
let roundsText = document.createElement("p");
let score = document.createElement("p");
let finalScore = document.createElement("p");

function showRounds(message) {
  roundsText.textContent = message;
  buttonContainer.appendChild(roundsText);
}

function showWinner(message) {
  winner.textContent = message;
  textDiv.appendChild(winner);
}

function showScore(message) {
  score.textContent = message;
  buttonContainer.appendChild(score);
}

function showFinalScore(message) {
  finalScore.textContent = message;
  textDiv.appendChild(finalScore);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    showWinner("You won! Rock beats scissors");
    userScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    showWinner("You won! Paper beats rock");
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    showWinner("You won! Scissors beats paper");
    userScore++;
  } else if (playerSelection === computerSelection) {
    showWinner(`Draw! ${playerSelection} is friends with ${computerSelection}`);
  } else if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    showWinner("You must make a valid choice.");
  } else {
    showWinner(`You lost! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }

  showScore(`You ${userScore} x ${computerScore}`);
}

function showResult() {
  if (userScore > computerScore) {
    showFinalScore(
      `You won! Final score: You ${userScore} x ${computerScore} Computer`
    );
    console.log(`You ${userScore} x ${computerScore} Computer`);
  } else if (computerScore > userScore) {
    showFinalScore(
      `You lost! Final score: You ${userScore} x ${computerScore} Computer`
    );
    console.log(`You ${userScore} x ${computerScore} Computer`);
  } else {
    showFinalScore(
      `You ${userScore} x ${computerScore} Computer. This is a draw!`
    );
    console.log(`You ${userScore} x ${computerScore} Computer`);
  }
}

function playGame() {
  let rounds = 0;

  playButton.addEventListener('click', () => {
    playButton.remove()
    showRounds(`Round ${rounds + 1}`);
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        showRounds(`Round ${rounds + 1}`);
        playRound(button.id, getComputerChoice());
        console.log(button.id, getComputerChoice());
        rounds++;
        
        if (rounds === 5) {
          showScore("Game over.");
          buttons.forEach((button) => {
            button.remove();
          });
          showResult();
          showRounds("");
        }
      });
    });
  })


}

playGame();
