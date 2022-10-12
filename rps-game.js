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
let gameOutcome       ='';

let playerTurn           ;
let computerSelection ='';

const choices         = ["rock", "paper", "scissors"];
const buttons         = document.querySelectorAll("div.buttonChoice button");

function computerTurn(){
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
};


buttons.forEach(button =>{button.addEventListener('click', playerChoice)});

function playRound(playerSelection, computerSelection) {
    if(
        (computerSelection === "rock" && playerSelection === "scissors")||
        (computerSelection === "paper" && playerSelection === "rock")||
        (computerSelection === "scissors" && playerSelection === "paper")
        ){
            computerScore++
            roundOutcome ="Oh no! The computer wins this round!",console.log(playerScore,computerScore);            
        }else if ((computerSelection === playerSelection)){
                roundOutcome= "Round tied!",console.log(playerScore,computerScore);               
        }else {
                playerScore++
                roundOutcome = "You win this round!",console.log(playerScore,computerScore);         
        }
        console.log(roundOutcome);
        endGameResults();
        console.log(endGameResults());
    };


function playerChoice(e){
        let playerSelection = (e.target.id);
        playerTurn = e.target.id;
        playRound(playerSelection,computerTurn());        
    };

function endGameResults(){
    if (playerScore === 5 && computerScore !== 5){
        gameOutcome = "You showed that Skynet wannabe who the real machine is!";
        buttons.forEach(button => {button.removeEventListener('click', playerChoice);
    });
        return (gameOutcome);
    }else if (playerScore !== 5 && computerScore === 5){
        gameOutcome = "You lost? Seriously? This thing should have been programmed to lose!";
        buttons.forEach(button => {button.removeEventListener('click', playerChoice);
    });
        return (gameOutcome);
    }        
};
