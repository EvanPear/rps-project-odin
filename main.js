const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
   
    if (randomNumber === 1 || randomNumber === 2) {
       return rock;
    } else if (randomNumber === 3 || randomNumber === 4){
       return paper;
    } else {
       return scissors;
    }
   }
   
   
   
   function getHumanChoice() {
       let userInput = prompt ("What will it be? choose between: Rock, Paper, or Scissors. ").toLowerCase();
   
   
       while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
           
           userInput = prompt
           ("Invalid choice please choose either Rock, Paper, or Scissors. ").toLowerCase();
       }
   
       if (userInput === "rock") {
           return rock;
       } else if (userInput === "paper") {
           return paper;
       } else if (userInput === "scissors") {
           return scissors;
       }
   }

   function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (
            (humanChoice === rock && computerChoice === scissors) ||
            (humanChoice === paper && computerChoice === rock) || 
            (humanChoice === scissors && computerChoice === paper) 
         ) {
         console.log(`Player choice: ${humanChoice} Computer choice: ${computerChoice}`)
         console.log(`You win ${humanChoice} beats ${computerChoice}!`);
         humanScore++;
       } else if (humanChoice === computerChoice) {
         console.log(`Player choice: ${[humanChoice]} Computer choice: ${computerChoice}`)
         console.log(`This rounds a tie you both choose ${humanChoice}!`);
       } else {
         console.log(`Player choice: ${humanChoice} Computer choice: ${computerChoice}`)
         console.log(`Computer takes this round ${computerChoice} beats ${humanChoice}!`);
         computerScore++;
       }
    }
}   