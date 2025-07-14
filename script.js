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

function playGame(){

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

    playScore = 0
    compScore = 0

    while(playScore < 3 && compScore < 3){
        playPick = playChoice();
        compPick = compChoice();
        playRound(playPick, compPick);
        console.log("Current score is Player: " + playScore + " and Computer: " + compScore);
    }

    if(playScore === 3){
        console.log("Player Wins!")
    } else {
        console.log("Computer Wins!")
    }


}

playGame();