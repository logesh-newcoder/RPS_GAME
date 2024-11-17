const selectans = document.querySelector("#selectans");
const systemans = document.querySelector("#systemans");
const answer = document.querySelector("#answer");
const playerpoint = document.getElementById("playerscore");
const systempoint = document.getElementById("systemscore");

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function sender(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // Determine game outcome
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }

    // Update display choices
    selectans.textContent = `Player: ${playerChoice}`;
    systemans.textContent = `Computer: ${computerChoice}`;
    answer.textContent = result;
    answer.classList.remove("green", "red");

    // Update scores and colors based on result
    if (result === "You win!") {
        answer.classList.add("green");
        playerScore++;
        playerpoint.textContent = playerScore;
    } else if (result === "You lose!") {
        answer.classList.add("red");
        computerScore++;
        systempoint.textContent = computerScore;
    }

    // Animate the result message
    answer.style.transform = "scale(1.2)";
    setTimeout(() => {
        answer.style.transform = "scale(1)";
    }, 300);
}
