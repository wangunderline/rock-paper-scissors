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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You won! Rock beats scissors");
    userScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You won! Paper beats rock");
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You won! Scissors beats paper");
    userScore++;
  } else if (playerSelection === computerSelection) {
    alert(`Draw! ${playerSelection} is friends with ${computerSelection}`);
  } else if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    alert("You must make a valid choice.");
  } else {
    alert(`You lost! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }

  alert(`You ${userScore} x ${computerScore}`);
}

function playGame() {
  if (confirm("New game?")) {
    for (let i = 0; i < 5; i++) {
      alert(`Round ${i + 1}`);
      playRound(prompt("Do it").toLowerCase(), getComputerChoice());
    }
  }

  if (userScore > computerScore) {
    alert(`You won! Final score: You ${userScore} x ${computerScore} Computer`);
    console.log(`You ${userScore} x ${computerScore} Computer`);
  } else if (computerScore > userScore) {
    alert(
      `You lost! Final score: You ${userScore} x ${computerScore} Computer`
    );
    console.log(`You ${userScore} x ${computerScore} Computer`);
  } else {
    alert(`You ${userScore} x ${computerScore} Computer. This is a draw!`);
    console.log(`You ${userScore} x ${computerScore} Computer`);
  }
}

playGame();
