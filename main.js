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

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorBtn = document.querySelector('#scissor-btn');
const resultLog = document.querySelector('#result-log');
const roundInfo = document.querySelector('#round-info');
const scoreBoard = document.querySelector('#score-board');
const finalResult = document.querySelector('#final-result');
const resetBtn = document.querySelector('#reset-btn');

function disableButtonChoices(disable) {
    rockBtn.disabled = disable;
    paperBtn.disabled = disable;
    scissorBtn.disabled = disable;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    resultLog.textContent = '';
    roundInfo.textContent = '';
    scoreBoard.textContent = 'You: 0 - Computer: 0';
    finalResult.textContent = '';
    disableButtonChoices(false);
    resetBtn.style.display = 'none';
}

resetBtn.addEventListener('click', resetGame);
   

    let humanScore = 0;
    let computerScore = 0;
    let roundCounter = 0;

    function playRound(humanChoice, computerChoice) {

        const maxRounds = 5;

        if (
            (humanChoice === rock && computerChoice === scissors) ||
            (humanChoice === paper && computerChoice === rock) || 
            (humanChoice === scissors && computerChoice === paper) 
         ) {
         resultLog.textContent = (`Player: ${humanChoice} - Computer: ${computerChoice}`);
         humanScore++;
         roundCounter++;
         roundInfo.textContent = (`Round: ${roundCounter} Win!`);
         scoreBoard.textContent = (`You: ${humanScore} - Computer: ${computerScore}`);
       } else if (humanChoice === computerChoice) {
         resultLog.textContent = (`Player: ${humanChoice} - Computer: ${computerChoice}`);
         roundCounter++;
         roundInfo.textContent = (`Round: ${roundCounter} Draw!`);
         scoreBoard.textContent = (`You: ${humanScore} - Computer: ${computerScore}`);
       } else {
         resultLog.textContent = (`Player: ${humanChoice} - Computer: ${computerChoice}`);
         computerScore++;
         roundCounter++;
         roundInfo.textContent = (`Round: ${roundCounter} Loss!`);
         scoreBoard.textContent = (`You: ${humanScore} - Computer: ${computerScore}`);
       }
       if (maxRounds === roundCounter) {
         if (humanScore > computerScore) {
         finalResult.textContent = (`Victory congratulations! Final score: You ${humanScore} - Computer ${computerScore}`);
       } else {
        finalResult.textContent = (`Defeat You lost this one! Final score: You ${humanScore} - Computer ${computerScore}`);
      }
      disableButtonChoices(true);
      resetBtn.style.display = 'inline-block';
     }
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


rockBtn.addEventListener('click', () => {
    playRound(rock, getComputerChoice())
});

paperBtn.addEventListener('click', () => {
    playRound(paper, getComputerChoice())
});

scissorBtn.addEventListener('click', () => {
    playRound(scissors, getComputerChoice())
});