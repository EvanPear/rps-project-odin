const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
   
    if (randomNumber === 1 || randomNumber === 2) {
       return rock;
    } else if (randomNumber === 3 || randomNumber === 4){
       return scissors;
    } else {
       return paper;
    }
   }
   
    function getHumanChoice() {
       let userInput = 
        prompt ("What will it be? choose between: Rock, Paper, or Scissors. ").toLowerCase();
   
   
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
    let roundCounter = 0;

    function playRound(humanChoice, computerChoice) {

        if (
            (humanChoice === rock && computerChoice === scissors) ||
            (humanChoice === paper && computerChoice === rock) || 
            (humanChoice === scissors && computerChoice === paper) 
         ) {
         console.log(`Player: ${humanChoice} - Computer: ${computerChoice}`) 
         humanScore++;
         roundCounter++;
         console.log(`Round: ${roundCounter} Win! Score: You ${humanScore} - Computer ${computerScore}`);
       } else if (humanChoice === computerChoice) {
         console.log(`Player: ${humanChoice} - Computer: ${computerChoice}`)
         roundCounter++;
         console.log(`Round: ${roundCounter} Draw! Score: You ${humanScore} - Computer ${computerScore}`);
       } else {
         console.log(`Player: ${humanChoice} - Computer: ${computerChoice}`)
         computerScore++;
         roundCounter++;
         console.log(`Round: ${roundCounter} Loss! Score: You ${humanScore} - Computer ${computerScore}`);
       }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if ( humanScore === computerScore) {
        console.log(`Tie Breaker Round Initiated Score: You ${humanScore} - Computer ${computerScore}`)
        alert("Tie Breaker Round! Best of three - winner takes all!");
        tieBreaker();
    } else if (humanScore > computerScore) {
        console.log(`Victory! ${humanScore} - ${computerScore}`);
    } else {
        console.log(`Defeat! ${computerScore} - ${humanScore}`);
    }

    /* Who likes to end in a tie? tieBreaker() ensures they're always a winner */

    function tieBreaker() {
        let humanWins = 0;
        let computerWins = 0;
        let bonusRounds = 0;


        while (humanWins < 2 && computerWins < 2) {
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();
        
        if (
            (humanChoice === rock && computerChoice === scissors) ||
            (humanChoice === scissors && computerChoice === paper) ||
            (humanChoice === paper && computerChoice === rock)
        ) {
            humanWins++;
            bonusRounds++;
            console.log(`You won tie breaker round: ${bonusRounds}!`);
            console.log(`Score: You ${humanWins} - Computer ${computerWins}`);
        } else if (humanChoice === computerChoice) {
            console.log("Tie detected - round washed! Go again...");
            continue; /*`continue` instead of calling `tieBreaker()`again stops score from resetting on a tie*/
        } else {
            bonusRounds++;
            computerWins++;
            console.log(`You lost tie breaker round ${bonusRounds}!`);
            console.log(`Score: You ${humanWins} - Computer ${computerWins}`);
        }
            
    }
    if (humanWins === 2) {
        console.log("Victory!");
        alert(`Victory, Congratulations! Final Score: You ${humanWins + humanScore} - Computer ${computerWins + computerScore}`);
    } else if (computerWins === 2) {
        console.log("Defeat!");
        alert(`Defeat! Final Score: You ${humanWins + humanScore} - Computer ${computerWins + computerScore}`);
    }
  }
}   

playGame()