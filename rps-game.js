let computerScore = 0;
let playerScore   = 0;

let gameRunning   = true;

const buttons     = document.querySelectorAll("div.buttonChoice button");
const choices     = ["rock", "paper", "scissors"]

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (gameRunning) {
            let playerSelection = (e.target.id);
            let computerSelection = choices[Math.floor(Math.random() * choices.length)];
            if (
                    (computerSelection === "rock" && playerSelection === "scissors") ||
                    (computerSelection === "paper" && playerSelection === "rock") ||
                    (computerSelection === "scissors" && playerSelection === "paper")) {
                computerScore++;
                console.log("Oh no! The computer wins this round!\n", playerScore, computerScore);            
                if (computerScore >= 5) {
                    gameRunning = false;
                    console.log("You lost? Seriously? This thing should have been programmed to lose!");
                }
            } else if ((computerSelection === playerSelection)) {
                console.log("Round tied!\n", playerScore,computerScore);               
            } else {
                playerScore++;
                console.log("You win this round!\n", playerScore, computerScore);         
                if (playerScore >= 5) {
                    gameRunning = false;
                    console.log("You showed that Skynet wannabe who the real machine is!");
                }
            }
        }
    });
});