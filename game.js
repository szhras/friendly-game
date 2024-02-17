// ROCK PAPER SCISSORS
const choices = ["rock","paper","scissors"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay= document.getElementById("ResultDisplay");
const PlayerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");
let PlayerScore = 0;
let ComputerScore = 0;
 
function PlayGame(PlayerChoice){

    const ComputerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";

if(PlayerChoice === ComputerChoice){
    result = "IT'S A TIE!";
}
else{
    switch(PlayerChoice){
        case "rock":
           result = (ComputerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
           break;
           case "paper":
           result = (ComputerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
           break;
           case "scissors":
           result = (ComputerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
           break;
           



    }
}

PlayerDisplay.textContent = `PLAYER: ${PlayerChoice}`;
ComputerDisplay.textContent = `COMPUTER: ${ComputerChoice}`;
ResultDisplay.textContent = result;

ResultDisplay.classList.remove("greenText", "redText");

switch(result){
    case "YOU WIN":
        ResultDisplay.classList.add("greenText");
        PlayerScore++;
        PlayerScoreDisplay.textContent= PlayerScore;
        break; 

        case "YOU LOSE":
        ResultDisplay.classList.add("redText");
        ComputerScore++;
        ComputerScoreDisplay.textContent= ComputerScore;
        break; 


        

}
    
   
   
}