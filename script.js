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

const userChoice = prompt("Do it").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! Scissors beats paper");
    } else if (playerSelection === computerSelection) {
        alert(`Draw! ${playerSelection} is friends with ${computerSelection}`);
    } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert("You must make a valid choice.")
    } else {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

playRound(userChoice, getComputerChoice());
