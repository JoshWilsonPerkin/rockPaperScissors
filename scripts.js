let choices = ["rock", "paper", "scissors"];
let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let winner = '';

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    humanChoice = prompt("What will you play?").toLowerCase();
}

function playGame() {

    function playRound() {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        }
        else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log("You win!");
            humanScore++;
        }
        else {
            console.log("You lose.");
            computerScore++;
        }
    }
    for(i=0; i<5; i++) {
        getComputerChoice();
        getHumanChoice();
        playRound();
    }
}

playGame(humanScore, computerScore);
if(humanScore > computerScore) {
    winner = "Human";
}
else {
    winner = "Computer";
}
console.log(`The final score is Human ${humanScore}, Computer ${computerScore}. Congratulations to the winner - ${winner}!`);