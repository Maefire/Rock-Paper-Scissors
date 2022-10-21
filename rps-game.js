//Game start state
let computerScore        = 0;
let playerScore          = 0;
let gameRunning          = true;
roundResults.textContent = `You versus the computer overlord. Five rounds. Who. Will. Win?\n`;
displayComputerScore.textContent = `${computerScore}`;
displayPlayerScore.textContent = `${playerScore}`;

//lizard, Spock
const choices            = ["rock", "paper", "scissors"];

//Document info pulls
const buttons            = document.querySelectorAll("div.buttonBox button");
const retry              = document.getElementById("retryButton");

//game time
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
                roundResults.textContent = "Oh no! The computer wins this round!\n";
                displayComputerScore.textContent = `${computerScore}`; 
                displayPlayerScore.textContent = `${playerScore}`;            
                if (computerScore >= 5) {
                    gameRunning = false;
                    roundResults.textContent = "You lost? Seriously? This thing should have been programmed to lose!";
                }
            } else if ((computerSelection === playerSelection)) {
                roundResults.textContent= "Round tied!\n";
                displayComputerScore.textContent = `${computerScore}`; 
                displayPlayerScore.textContent = `${playerScore}`;               
            } else {
                playerScore++;
                roundResults.textContent = "You win this round!\n";
                displayComputerScore.textContent = `${computerScore}`; 
                displayPlayerScore.textContent = `${playerScore}`;         
                if (playerScore >= 5) {
                    gameRunning = false;
                    roundResults.textContent = "You showed that Skynet wannabe who the real machine is!";
                }
            }
        }else if(gameRunning == false){            
            retry.addEventListener('click',() =>{                
                playerScore = 0;
                computerScore = 0;
                roundResults.textContent = `You versus the computer overlord. Five rounds. Who.\
                        Will. Win?\n`;
                displayComputerScore.textContent = `${computerScore}`;
                displayPlayerScore.textContent = `${playerScore}`;
                gameRunning = true;
            });//Game reset condition
        };
    });
});