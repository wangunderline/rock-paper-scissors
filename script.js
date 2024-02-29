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
let roundsText = document.createElement("p");
let score = document.createElement("p")

function showRounds(message) {
  roundsText.textContent = message;
  container.appendChild(roundsText);
}

function showWinner(message) {
  winner.textContent = message;
  container.appendChild(winner);
}

function showScore(message) {
  score.textContent = message;
  container.appendChild(score);
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

let rounds = 1;
function game() {
  showRounds(`Round ${rounds}`);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
      console.log(button.id, getComputerChoice());
      rounds++;
      showRounds(`Round ${rounds}`);
    });
  });
}

//game()

function playGame() {

   if (rounds < 5) {
    game()
  } else {
    buttons.remove()
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
