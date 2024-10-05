const selectans = document.querySelector("#selectans");
const systemans = document.querySelector("#systemans");
const answer = document.querySelector("#answer");
const choice = ['rock', 'paper', 'scissors'];
const playerpoint=document.getElementById("playerscore");
const systempoint=document.getElementById("systemscore");
let playerscores=0;
let ststemscores=0;

function sender(ans) {
    const computer = choice[Math.floor(Math.random() * 3)];
    console.log(computer)
    let result="";
    if (ans === computer) {
        result = "It's a tie!";
    } else {
        switch (ans) {
            case "rock":
                result = (computer === "scissors") ? "you win" : "you loss";
                break;
            case "paper":
                result = (computer === "rock") ? "you win" : "you loss";
                break;
            case "scissors":
                result = (computer === "paper") ? "you win" : "you loss";
                break;
        }
    }
    selectans.textContent = `Player:${ans}`;
    systemans.textContent = `Computer: ${computer}`;
    answer.textContent = result;
    answer.classList.remove("green","red")
    switch (result){
        case "you win":
            answer.classList.add("green");
            playerscores++;
            playerpoint.textContent=playerscores;
            break;
        case "you loss":
            answer.classList.add("red");
            ststemscores++;
            systempoint.textContent=ststemscores;
            break;
    }
}
