/* 
Computer makes a random choice between rock, paper, scissors.
Player is prompted to make a choice between rock, paper, scissors.
rock<paper<scissors<rock If rock and paper are chosen, then return paper wins. Repeat until complete.
If wins equal 5, return 'you win!'
*/

let computerScore     = 0;
let playerScore       = 0;
let roundOutcome      ='';
let choices           = ["rock", "paper", "scissors"];
let playerSelection   ='';
let computerSelection ='';
let gameOutcome       ='';

function playRound(playerSelection, computerSelection) {
    if(
        (computerSelection === "rock" && playerSelection === "scissors")||
        (computerSelection === "paper" && playerSelection === "rock")||
        (computerSelection === "scissors" && playerSelection === "paper")
        ){
            computerScore++
            roundOutcome ='Oh no! The computer wins this round!',console.log(playerScore,computerScore);
            return (roundOutcome);
        }else if (
            (computerSelection === playerSelection)
            ){
                roundOutcome= 'Round tied!',console.log(playerScore,computerScore);
                return (roundOutcome);
            }
        else {
                playerScore++
                roundOutcome = 'You win this round!',console.log(playerScore,computerScore);
                return (roundOutcome);
        }  
}

function game(){
    
    for(roundTotal = 0; roundTotal < 5; roundTotal++){
        let computerSelection = choices[Math.floor(Math.random() * choices.length)];
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        console.log(roundTotal,playRound(playerSelection,computerSelection));
    }
    if(playerScore > computerScore){
        gameOutcome = "Congratulations! You win!";
        return (gameOutcome);
    }else if(computerScore > playerScore){
        gameOutcome = "Congra- Oh. Nevermind. The computer wins!";
        return (gameOutcome);
    }else
        gameOutcome = "The computer showed mercy. Game draw.";
        return (gameOutcome);
}
console.log(game());
console.log(computerScore,playerScore);
