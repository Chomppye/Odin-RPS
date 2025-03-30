const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorButton = document.querySelector("#scissors")

let winnerDisplay = document.querySelector("#win-display")
let overallScoreCounter = document.querySelector("#overall-score")
let currentScoreCounter = document.querySelector("#current-round-score")

let currentScore = [0, " - ", 0];
let overallScore = [0, " - ", 0];

function updateScore(newScore) {
    currentScoreCounter.textContent = newScore

    console.log(newScore)
    let playerScore = newScore.charAt(0)
    let computerScore = newScore.charAt(4)
    
    let playerScoreNumber = parseInt(playerScore)
    let computerScoreNumber = parseInt(computerScore)

    if (playerScoreNumber === 5) {

        overallScore[0] += 1
        currentScoreCounter.textContent = "0 - 0"
        currentScore = [0, " - ", 0]
        
    } else if (computerScoreNumber === 5) {

        overallScore[2] += 1
        currentScoreCounter.textContent = "0 - 0"
        currentScore = [0, " - ", 0]
    }

    let newOverall = overallScore.join("")
    overallScoreCounter.textContent = newOverall
}

function updateText(winner) {
    winnerDisplay.textContent = winner

    setTimeout(() => {
       winnerDisplay.textContent = "" 
    }, 1200)

}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)
    switch(choice) {
        case 1:
            return "rock";
            break
        
        case 2:
            return "paper";
            break
        
        case 3: 
            return "scissors"
            break
    }
}

function getHumanChoice(event) {
    let choice = event.target.id;
    playRound(choice)
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice()

    if (humanChoice === computerChoice) {
        updateText("Draw!")
        return;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper" 
    ) {
        currentScore[0] +=1
        updateText("You Won!")
    } else {
        currentScore[2] +=1
        updateText("You lost.")
    }
    let newScore = currentScore.join("")
    updateScore(newScore)
}


rockButton.addEventListener("click", getHumanChoice)
paperButton.addEventListener("click", getHumanChoice)
scissorButton.addEventListener("click", getHumanChoice)