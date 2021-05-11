let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, secretAnswer) => {
    const humanAnswer = Math.abs(humanGuess, secretAnswer)
    const computerAnswer = Math.abs(computerGuess, secretAnswer)
    if (humanAnswer < computerAnswer) {
        return true
    }
        else if (humanAnswer > computerAnswer) {
            return false
        }
        else if (humanAnswer === computerAnswer) {
            return true
        }
}

const updateScore = winner => {
    if (winner === "human") {
        humanScore += 1
    }
        else if (winner === "computer") {
            computerScore += 1
        }
        else {
            return "Error"
        }
}

const advanceRound = () => {
    currentRoundNumber += 1
}

updateScore("human")
console.log(humanScore)
