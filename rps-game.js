/* 
Rock, Paper, Scissors
define variables to use/being used
create basic round of gameplay
use that round for the game
report round results, and game results, in console
*/

let computerScore     = 0;
let playerScore       = 0;
let roundOutcome      ='';
let choices           = ["rock", "paper", "scissors"];
let playerSelection   ='';
let computerSelection ='';
let gameOutcome       ='';
let buttons = document.querySelectorAll(".btn")

function playRound(playerSelection, computerSelection) {
    if(
        (computerSelection === "rock" && playerSelection === "scissors")||
        (computerSelection === "paper" && playerSelection === "rock")||
        (computerSelection === "scissors" && playerSelection === "paper")
        ){
            computerScore++
            roundOutcome ="Oh no! The computer wins this round!",console.log(playerScore,computerScore);
            return (roundOutcome);
        }else if (
            (computerSelection === playerSelection)
            ){
                roundOutcome= "Round tied!",console.log(playerScore,computerScore);
                return (roundOutcome);
            }
        else {
                playerScore++
                roundOutcome = "You win this round!",console.log(playerScore,computerScore);
                return (roundOutcome);
        }  
}



buttons.forEach(function (item){
    item.addEventListener('click', function (getPlayerChoice){
        let playerSelection = (getPlayerChoice.target.id);
        playRound(playerSelection,computerSelection);
    });
});


    /* function game(){
        
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
    console.log(computerScore,playerScore);*/
    
    
    /*const removeFromArray = function(...theArgs) {
        const array = theArgs[0];
        return array.filter(value => !theArgs.includes(value));
    };*/
    
    //document.getElementById("rock").addEventListener("click",playRound);
