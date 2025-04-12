const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

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
         console.log(`Player: ${humanChoice} - Computer: ${computerChoice}`) 
         humanScore++;
         console.log(`Round: ${roundCounter} Win! Score: You ${humanScore} - Computer ${computerScore}`);
         roundCounter++;
       } else if (humanChoice === computerChoice) {
         console.log(`Player: ${[humanChoice]} - Computer: ${computerChoice}`)
         console.log(`Round: ${roundCounter} Draw! Score: You ${humanScore} - Computer ${computerScore}`);
         roundCounter++;
       } else {
         console.log(`Player: ${humanChoice} - Computer: ${computerChoice}`)
         computerScore++;
         console.log(`Round: ${roundCounter} Loss! Score: You ${humanScore} - Computer ${computerScore}`);
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