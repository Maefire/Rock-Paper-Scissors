/* 
Computer makes a random choice between rock, paper, scissors.
Player is prompted to make a choice between rock, paper, scissors.
rock<paper<scissors<rock If rock and paper are chosen, then return paper wins. Repeat until complete.
If wins equal 5, return 'you win!'
*/

let computerScore = 0;
let playerScore   = 0;
let roundOutcome  = '';
let choices = ["rock", "paper", "scissors"];
let playerSelection ='';
let computerSelection = '';





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
            roundOutcome ="Oh no! The commputer wins this round!";
            return (roundOutcome);
        }else if (
            (computerSelection === playerSelection)
            ){
                roundOutcome= 'Round tied!'
                return (roundOutcome);
            }
        else {
                playerScore++
                roundOutcome = "You win this round!";
                return (roundOutcome);
        }  
}


//  const playerSelection = "rock";
//const computerSelection = getComputerChoice(); 
// console.log(playRound(playerSelection, computerSelection));

function game(){
    
    for(roundTotal = 0; roundTotal < 5; roundTotal++){
        let computerSelection = choices[Math.floor(Math.random() * choices.length)];
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        console.log(roundTotal,playRound(playerSelection,computerSelection));
    }
    return("Game Complete")
}
console.log(game());
console.log(computerScore,playerScore);
     