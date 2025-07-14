console.log("Hello World!");

function compChoice() {
    num = Math.random();
    if(num <= 0.33){
        return "Rock";
    } else if (num <= 0.66 && num > 0.33){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playChoice() {
    ans = prompt("Choose Rock, Paper, or Scissors!");
    return ans;
}

playScore = 0
compScore = 0

function playRound(playPick, compPick) {
    playPick = playPick.toLowerCase();
    if((playPick === "rock" && compPick === "Rock") || (playPick === "paper" && compPick === "Paper") || (playPick === "scissors" && compPick === "Scissors")){
        console.log("It's a draw! Play again!")
    } else if ((playPick === "rock" && compPick === "Scissors") || (playPick === "paper" && compPick === "Rock") || (playPick === "scissors" && compPick === "Paper")){
        console.log("You win! " + playPick + " beats " + compPick + "!");
        playScore++;
    } else {
        console.log("You lose! " + compPick + " beats " + playPick + "!");
        compScore++;
    }
}

const playPick = playChoice();
const compPick = compChoice();

playRound(playPick, compPick);