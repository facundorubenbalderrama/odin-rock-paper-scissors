// Step 1 Check if JavaScript is linked to index html

// 1.3 console.log("Hello World");

// Step 2 Write the logic to get the computer choice
// 2.1
function getComputerChoice() {
   // 2.2 
    let choice;
    let computerChoice;

    choice = Math.random();

    if (choice < 0.3) {
        computerChoice = 'Rock'
    } else if (choice < 0.6) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissor'
    }

    return computerChoice;
}
// 2.3 console.log(getComputerChoice());

// Step 3 Write the logic to get the human choice
// 3.1
function getHumanChoice() {
    // 3.2
    let humanChoice;

    humanChoice = prompt();
    // 3.3
    console.log(humanChoice);

}

//getHumanChoice();

// Step 4 Declare the players score variables
// 4.1
let humanScore;
let computerScore;
// 4.2
humanScore = 0;
computerScore = 0;

// Step 5 Write the logic to play a single round
// 5.1
// 5.2
function playRound(humanChoice, computerChoice) {
    // your code here!
    // 5.3
    // 5.4
    // 5.5
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Step 6 Write the logic to play the entire game
// 6.1
function playGame() {
    
}
// 6.2
// 6.3
