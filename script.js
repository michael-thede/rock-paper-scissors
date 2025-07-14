console.log("Hello World!");

function compChoice() {
    num = Math.random();
    if(num <= 0.33){
        return "Rock!";
    } else if (num <= 0.66 && num > 0.33){
        return "Paper!";
    } else {
        return "Scissors!";
    }
}

function playChoice() {
    ans = prompt("Choose Rock, Paper, or Scissors!");
    return ans;
}