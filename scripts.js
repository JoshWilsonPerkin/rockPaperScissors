let choices = ["rock", "paper", "scissors"];
let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let winner = '';
let roundResult = '';

const container = document.createElement("div");
document.body.appendChild(container);

const title = document.createElement("h1");
title.textContent = "Let's Play Rock, Paper, Scissors";
container.appendChild(title);

const buttonDiv = document.createElement("div");
container.appendChild(buttonDiv);
buttonDiv.classList.add("buttonDiv");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
buttonDiv.appendChild(rockButton);
rockButton.classList.add("rockButton");
rockButton.addEventListener("click", function chooseRock() {
    humanChoice = "rock";
    getComputerChoice();
    playRound();
});

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
buttonDiv.appendChild(paperButton);
paperButton.classList.add("paperButton");
paperButton.addEventListener("click", function choosePaper() {
    humanChoice = "paper";
    getComputerChoice();
    playRound();
});

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
buttonDiv.appendChild(scissorsButton);
scissorsButton.classList.add("scissorsButton");
scissorsButton.addEventListener("click", function chooseScissors() {
    humanChoice = "scissors";
    getComputerChoice();
    playRound();
});

const reset = document.createElement("button");
reset.textContent = "Reset";
buttonDiv.appendChild(reset);
reset.classList.add("reset");
reset.addEventListener("click", function resetScore() {
    humanScore = 0;
    computerScore = 0;
    humScoreBox.removeChild(currHumScore);
    currHumScore.textContent = humanScore;
    humScoreBox.appendChild(currHumScore);
    compScoreBox.removeChild(currCompScore);
    currCompScore.textContent = computerScore;
    compScoreBox.appendChild(currCompScore);
    results.innerHTML = '';
});

const currScore = document.createElement("p");
currScore.textContent = "Current Score";
container.appendChild(currScore);

const scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreBoard");
container.appendChild(scoreBoard);

const humScore = document.createElement("p");
humScore.textContent = "Human:";
scoreBoard.appendChild(humScore);

const humScoreBox = document.createElement("div");
scoreBoard.appendChild(humScoreBox);
let currHumScore = document.createElement("p");
currHumScore.textContent = humanScore;
humScoreBox.appendChild(currHumScore);

const compScore = document.createElement("p");
compScore.textContent = "Computer:";
scoreBoard.appendChild(compScore);

const compScoreBox = document.createElement("div");
scoreBoard.appendChild(compScoreBox);
let currCompScore = document.createElement("p");
currCompScore.textContent = computerScore;
compScoreBox.appendChild(currCompScore);

const results = document.createElement("div");
container.appendChild(results);

const link = document.createElement("a");
link.setAttribute("href", "https://github.com/JoshWilsonPerkin/rockPaperScissors");
link.appendChild(document.createTextNode("Link to code"));
container.appendChild(link);

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

function tieGame() {
    results.innerHTML = '';
    roundResult = document.createTextNode("It's a tie. ");
    results.appendChild(roundResult)
}

function winGame() {
    results.innerHTML = '';
    roundResult = document.createTextNode("You win! ");
    results.appendChild(roundResult)
}

function loseGame() {
    results.innerHTML = '';
    roundResult = document.createTextNode("You lose. ");
    results.appendChild(roundResult)
}

function playRound() {

    if (humanChoice == computerChoice) {
        tieGame();
    }
    else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        ++humanScore;
        humScoreBox.removeChild(currHumScore);
        currHumScore.textContent = humanScore;
        humScoreBox.appendChild(currHumScore);
        winGame();
        checkWinner();
    }
    else {
        ++computerScore;
        compScoreBox.removeChild(currCompScore);
        currCompScore.textContent = computerScore;
        compScoreBox.appendChild(currCompScore);
        loseGame();
        checkWinner();
    }
}
function checkWinner() {

    if (humanScore === 5) {
        results.innerHTML = '';
        results.appendChild(document.createTextNode("The winner is Human. Press 'Reset' to start a new game."))
    }
    else if (computerScore === 5) {
        results.innerHTML = '';
        results.appendChild(document.createTextNode("The winner is Computer. Press 'Reset' to start a new game."))
    }
}