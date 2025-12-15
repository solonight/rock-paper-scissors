function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return computerChoice[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Play your choice: rock, paper, or scissors");
  if (!humanChoice) return undefined;
  humanChoice = humanChoice.toLowerCase();
  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(humanChoice)) {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return undefined;
  }
  return humanChoice;
}
function getTheWinner(humanChoice, computerChoice) {
  if (!humanChoice || !computerChoice) {
    return "Invalid input";
  }
  const h = humanChoice.toLowerCase();
  const c = computerChoice.toLowerCase();
  if (h === c) {
    return "tie";
  } else if (
    (h === "rock" && c === "scissors") ||
    (h === "scissors" && c === "paper") ||
    (h === "paper" && c === "rock")
  ) {
    return "human";
  } else {
    return "computer";
  }
}
function playRound() {
  const human = getHumanChoice();
  const computer = getComputerChoice();
  const winner = getTheWinner(human, computer);
  console.log("Human:", human);
  console.log("computer:", computer);
  console.log("Winner:", winner);
}
