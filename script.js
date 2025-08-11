let playerScore = 0;
let computerScore = 0;
let computerChoice = 0;
let num = 0
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const scoreboard = document.querySelector("#scoreboard");
const scoreText = document.querySelector("#scoreText");

function computerPicker(){
    num = Math.random();
    console.log(num);
    if(num <= 0.33){
        return "paper";
    } else if (num <= 0.66 && num > 0.33){
        return "rock";
    } else {
        return "scissors";
    }
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == "rock" && computerChoice == "rock" ||
        playerChoice == "paper" && computerChoice == "paper" ||
        playerChoice == "scissors" && computerChoice == "scissors"){
        scoreText.textContent = "Tie!"
    } else if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper"){
        scoreText.textContent = "Player Wins! " + playerChoice + " beats " + computerChoice;
        playerScore++;
    } else {
        scoreText.textContent = "Computer Wins!" + computerChoice + " beats " + playerChoice;
        computerScore++;
    }
    scoreboard.textContent = "Player: " + playerScore + "Computer: " + computerScore
    if(computerScore == 5){
        scoreboard.textContent = "Computer Wins Round!"
        scoreText.textContent = "Starting New Round!"
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore == 5){
        scoreboard.textContent = "Player Wins Round!"
        scoreText.textContent = "Starting New Round!"
        computerScore = 0;
        playerScore = 0;
    }
}

rockButton.addEventListener("click", () => playRound("rock", computerPicker()));
paperButton.addEventListener("click", () => playRound("paper", computerPicker()));
scissorButton.addEventListener("click", () => playRound("scissors", computerPicker()));

