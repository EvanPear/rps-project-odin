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


    // if ( humanScore === computerScore) {
    //     console.log(`Tie Breaker Round Initiated Score: You ${humanScore} - Computer ${computerScore}`)
    //     alert("Tie Breaker Round! Best of three - winner takes all!");
    //     // tieBreaker();
    // } else if (humanScore > computerScore) {
    //     console.log(`Victory! ${humanScore} - ${computerScore}`);
    //     alert(`Victory congratulations! Final score: You ${humanScore} - Computer ${computerScore}`);
    // } else {
    //     console.log(`Defeat! ${computerScore} - ${humanScore}`);
    //     alert(`Defeat You lost this one! Final score: You ${humanScore} - Computer ${computerScore}`);
    // }

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


 


function playAgain() {
    const no = "no";
    const yes = "yes";

    let restart = 
    prompt("Would you like to play again (Yes or No)").toLowerCase()

    while (restart !== "no" && restart !== "yes") {
       restart = prompt("Invalid choice please enter Yes or No").toLowerCase();
    }

    if (restart === "yes") {
        console.clear();
        console.log("New game initiated!");
        alert("Fresh game starting! Are you ready to rock? ;)")
        return playGame();
    } else {
        console.log("Thanks for playing!");
        alert("Thanks for playing! If you change your mind just refresh the page to play again!");
    }
}


const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorBtn = document.querySelector('#scissor-btn');

rockBtn.addEventListener('click', () => {
    playRound(rock, getComputerChoice())
});

paperBtn.addEventListener('click', () => {
    playRound(paper, getComputerChoice())
});

scissorBtn.addEventListener('click', () => {
    playRound(scissors, getComputerChoice())
});