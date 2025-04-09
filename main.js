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
    let roundCounter = 1;

    function playRound(humanChoice, computerChoice) {

        if (
            (humanChoice === rock && computerChoice === scissors) ||
            (humanChoice === paper && computerChoice === rock) || 
            (humanChoice === scissors && computerChoice === paper) 
         ) {
         console.log(`ROUND: ${roundCounter}`);
         console.log(`Player choice: ${humanChoice} || Computer choice: ${computerChoice}`)
         console.log(`Round win ${humanChoice} beats ${computerChoice}!`);
         humanScore++;
         roundCounter++;
       } else if (humanChoice === computerChoice) {
         console.log(`ROUND: ${roundCounter}`);
         console.log(`Player choice: ${[humanChoice]} || Computer choice: ${computerChoice}`)
         console.log(`Tie! Both picked ${humanChoice}!`);
         roundCounter++;
       } else {
        console.log(`ROUND: ${roundCounter}`);
         console.log(`Player choice: ${humanChoice} || Computer choice: ${computerChoice}`)
         console.log(`Round lost ${computerChoice} beats ${humanChoice}!`);
         computerScore++;
         roundCounter++;
       }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if ( humanScore === computerScore) {
        console.log(`Its a draw! ${humanScore} - ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`Victory! ${humanScore} - ${computerScore}`);
    } else {
        console.log(`Defeat! ${computerScore} - ${humanScore}`);
    }
}   

playGame()