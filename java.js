//Make computer choose random choice: Rock, Papper, Scissors

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random(choices)*choices.length)];
}
const computerSelection = getComputerChoice

let x = getComputerChoice();

function playerChoice() {
    prompt("Please Choose Rock, Paper, or Scissors")
}
const playerSelection = playerChoice
let z = playerSelection()



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock")
        return "It's a Tie! Play again";
    else if (playerSelection === "Paper" && computerSelection ==="Rock")
        return "You win the round!";
    else if (playerSelection === "Rock" && computerSelection ==="Scissors")
        return "You win the round!";
    else if (playerSelection === "Scissors" && computerSelection ==="Paper")
        return "You win the round!";
}