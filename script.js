//Game start state
let computerScore                = 0;
let playerScore                  = 0;
let gameRunning                  = true;
roundResults.textContent         = `Fancy a game of Rock, Paper, Scissors? First to five, takes the prize!
                            Who. Will. Win?\n`;
displayComputerScore.textContent = `${computerScore}`;
displayPlayerScore.textContent   = `${playerScore}`;
displayPlayerChoice.textContent  = '';
displayComputerChoice.textContent= '';

//lizard, Spock
const choices                    = ["rock", "paper", "scissors"];

//Document info pulls
const buttons                    = document.querySelectorAll("button");
const retry                      = document.getElementById("retryButton");
const btnBox                     = document.getElementById("boxWrap");

//game time
buttons.forEach(button => {        
    button.addEventListener('click', e => {
        if (gameRunning === true) {          
            let playerSelection = (e.target.id);
            let computerSelection = choices[Math.floor(Math.random() * choices.length)];
            if (
                    (computerSelection === "rock" && playerSelection === "scissors") ||
                    (computerSelection === "paper" && playerSelection === "rock") ||
                    (computerSelection === "scissors" && playerSelection === "paper")) {
                computerScore++;
                roundResults.textContent = "Good try, but I've taken this round!\n";
                displayComputerChoice.textContent=`chose: ${computerSelection}`
                displayComputerScore.textContent = `${computerScore}`; 
                displayPlayerChoice.textContent = `chose: ${playerSelection}`;
                displayPlayerScore.textContent = `${playerScore}`;                            
            } else if ((computerSelection === playerSelection)) {
                roundResults.textContent= `The round is tied, but the game isn't finished yet!\n`;
                displayComputerChoice.textContent=`chose: ${computerSelection}`
                displayComputerScore.textContent = `${computerScore}`; 
                displayPlayerChoice.textContent = `chose: ${playerSelection}`;
                displayPlayerScore.textContent = `${playerScore}`;               
            } else {
                playerScore++;
                roundResults.textContent = `Blast! You won't get the better of me next round!\n`;
                displayComputerChoice.textContent=`chose: ${computerSelection}`
                displayComputerScore.textContent = `${computerScore}`; 
                displayPlayerChoice.textContent = `chose: ${playerSelection}`;
                displayPlayerScore.textContent = `${playerScore}`;         
            }
        if (playerScore >= 5) {
            roundResults.textContent = `Surely you must have cheated. I refuse to admit 
            I've been defeated! Challenge me again!`;
            gameRunning = false;
            retry.style.display = "block";
            btnBox.style.display = "none";
        } else if (computerScore >= 5) {
            roundResults.textContent = `It looks like you just weren't quite up to the 
            challenge. Care to try again?`;
            gameRunning = false;
            retry.style.display = "block";
            btnBox.style.display = "none";
        }
        } else if(gameRunning != true){
            retry.style.display = "none";
            btnBox.style.display = "flex";                          
            playerScore = 0;
            computerScore = 0;
            roundResults.textContent = `Fancy a game of Rock, Paper, Scissors? First to five, 
                                        takes the prize! Who. Will. Win?\n`;
            displayComputerScore.textContent = `${computerScore}`;
            displayPlayerScore.textContent = `${playerScore}`;
            gameRunning = true;                
            ;//Game reset condition
        };
    });
});