//Make computer choose random choice: Rock, Papper, Scissors

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random(choices)*choices.length)];
}

let x = getComputerChoice()
