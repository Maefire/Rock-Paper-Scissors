/* 
Computer makes a random choice between rock, paper, scissors.
Player is prompted to make a choice between rock, paper, scissors.
rock<paper<scissors<rock If rock and paper are chosen, then return paper wins. Repeat until complete.
If wins equal 5, return 'you win!'
*/

let computerScore = 0
let playerScore   = 0
let roundOutcome  = ''
let choices = ["rock", "paper", "scissors"]

let computerChoice = choices[Math.floor(Math.random() * choices.length)];


// function getComputerChoice(){
//     return choices[Math.floor(Math.random() * choices.length)];   
// };

function playRound(playerSelection, computerSelection) {
    if(
        (computerSelection === "rock" && playerSelection === "scissors")||
        (computerSelection === "paper" && playerSelection === "rock")||
        (computerSelection === "scissors" && playerSelection === "paper")
        ){
            computerScore++
            return(computerSelection);
        }else if (
            (computerSelection === playerSelection)
            ){
                roundOutcome= 'Game tied!'
                return (roundOutcome);
            }
        else {
                playerScore++
                return (playerSelection);
        }  
}

let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
let computerSelection = computerChoice;
//  const playerSelection = "rock";
//const computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection));

function game(){
    
    for(roundTotal = 0; roundTotal < 5; roundTotal++){
        console.log(roundTotal,playRound(playerSelection,computerSelection));
    }
    console.log(roundTotal);

    if (playerScore > computerScore && roundTotal === 5){
        return("Congratulations! You won!")
    }else if(playerScore < computerScore && roundTotal === 5){
        return("Oh no! You lost!")
    }else {
        return("There is no winner. Shake metaphorical hands on your tie.")
    }
}
console.log(game());
console.log(computerScore,playerScore);
     