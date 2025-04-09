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
       }else if (userInput === "scissors") {
           return scissors;
       }
   }