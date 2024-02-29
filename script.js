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
const buttons = document.querySelectorAll("button");

let winner = document.createElement("p");
let result = document.createElement("p");

function resultText(message) {
  result.textContent = message;
  container.appendChild(result);
}

function text(message) {
  winner.textContent = message;
  container.appendChild(winner);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    text("You won! Rock beats scissors");
    userScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    text("You won! Paper beats rock");
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    text("You won! Scissors beats paper");
    userScore++;
  } else if (playerSelection === computerSelection) {
    text(`Draw! ${playerSelection} is friends with ${computerSelection}`);
  } else if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    text("You must make a valid choice.");
  } else {
    text(`You lost! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }

  text(`You ${userScore} x ${computerScore}`);
}


function game() {


    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        console.log(button.id, getComputerChoice());
      });
    });


}

function playGame() {

for (let i = 0; i < 5; i++) {
  game()
  resultText (`Round ${i + 1}`)
}

  if (userScore > computerScore) {
    resultText(
      `You won! Final score: You ${userScore} x ${computerScore} Computer`
    );
    console.log(`You ${userScore} x ${computerScore} Computer`);
  } else if (computerScore > userScore) {
    resultText(
      `You lost! Final score: You ${userScore} x ${computerScore} Computer`
    );
    console.log(`You ${userScore} x ${computerScore} Computer`);
  } else {
    resultText(`You ${userScore} x ${computerScore} Computer. This is a draw!`);
    console.log(`You ${userScore} x ${computerScore} Computer`);
  }
}

playGame();
