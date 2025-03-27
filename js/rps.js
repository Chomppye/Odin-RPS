


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
    let choice = prompt("What will you choice for rock paper scissors")
    return choice.toLowerCase()
}

getHumanChoice()
getComputerChoice()