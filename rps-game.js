let computerScore        = 0;
let playerScore          = 0;
roundResults.textContent = `You versus the computer overlord. Five rounds. Who. Will. Win?\n`;
displayScore.textContent = `You: ${playerScore} Computer: ${computerScore}`;

let gameRunning          = true;

const buttons            = document.querySelectorAll("div.buttonChoice button");
const choices            = ["rock", "paper", "scissors"]

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
                displayScore.textContent = 
                    `You: ${playerScore} Computer: ${computerScore}`;            
                if (computerScore >= 5) {
                    gameRunning = false;
                    roundResults.textContent = "You lost? Seriously? This thing should have been programmed to lose!";
                }
            } else if ((computerSelection === playerSelection)) {
                roundResults.textContent= "Round tied!\n";
                displayScore.textContent = 
                    `You: ${playerScore} Computer: ${computerScore}`;               
            } else {
                playerScore++;
                roundResults.textContent = "You win this round!\n";
                displayScore.textContent = 
                    `You: ${playerScore} Computer: ${computerScore}`;         
                if (playerScore >= 5) {
                    gameRunning = false;
                    roundResults.textContent = "You showed that Skynet wannabe who the real machine is!";
                }
            }
        }
    });
});