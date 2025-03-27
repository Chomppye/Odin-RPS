function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)
    console.log(choice)
    switch(choice) {
        case 1:
            console.log("Rock")
            return "rock";
            break
        
        case 2:
            console.log("Paper")
            return "paper";
            break
        
        case 3: 
            console.log("Scissors")
            return "scissors"
            break
    }
}

function getHumanChoice() {
    let choice = prompt("What will you choose for rock paper scissors")
    return choice.toLowerCase()
}

function giveWin(toWho) {
}

function playRound(humChoice, compChoice) {
    if (humChoice === "rock" && compChoice === "scissors"
        || humChoice === "scissors" && compChoice === "paper"
        || humChoice === "paper" && compChoice === "rock") {
        
        //human wins
        humanScore += 1
        console.log(`${humChoice} Beats ${compChoice}, You Won This Round!`)
        console.log(`The new score is ${humanScore} ( <= you) ${computerScore} (<= computer)`)
        
    } else if (compChoice === "rock" && humChoice === "scissors"
        || compChoice === "scissors" && humChoice === "paper"
        || compChoice === "paper" && humChoice === "rock") {
        
        // computer wins
        computerScore += 1
        console.log(`${compChoice} Beats ${humChoice}, You Lost This Round.`)
        console.log(`The new score is ${humanScore} ( <= you) ${computerScore} (<= computer)`)

    } else {
        
        // they drew so the score stays the same
        console.log("It was a draw")
    }
}

function playGame() {
    const maxRounds = 5;
    for (i = 1; i <= maxRounds; ++i) {
        const hChoice = getHumanChoice()
        const cChoice = getComputerChoice()
        console.log(`${i} Round`)
        playRound(hChoice, cChoice)
    }
}

let humanScore = 0;
let computerScore = 0;

playGame()