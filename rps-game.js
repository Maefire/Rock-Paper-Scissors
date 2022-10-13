let computerScore     = 0;
let playerScore       = 0;

let gameRunning      = true;

const buttons         = document.querySelectorAll("div.buttonChoice button");

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (gameRunning) {
            let playerSelection = parseInt(e.target.value);
            let computerSelection = Math.floor(Math.random() * 3);
            if (
                    (computerSelection === 1 && playerSelection === 3) ||
                    (computerSelection === 2 && playerSelection === 1) ||
                    (computerSelection === 3 && playerSelection === 2)) {
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