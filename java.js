//Make computer choose random choice: Rock, Papper, Scissors

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random(choices)*choices.length)];
}
const computerSelection = getComputerChoice

let x = getComputerChoice();

function playerChoice() {
    let options;
    let playerChoice = prompt("Please Choose Rock, Paper, or Scissors");
    switch(playerChoice) {
    case "Rock":
     options = "Rock";
     break;
    case "Paper":
     options = "Paper";
     break;
    case "Scissors":
     options = "Scissors";
     break;
    default:
     options = "That is not an option..." 
    }
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