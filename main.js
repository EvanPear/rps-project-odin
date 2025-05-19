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
    isTieBreaker = false;
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
    const maxRounds = 5;
    let isTieBreaker = false;
    const winMsg = 'Victory! I never doubted you!';
    const lossMsg = ' Defeat! Better luck next time';
    
    function playRound(humanChoice, computerChoice) {

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
            finalResult.textContent = winMsg;
            disableButtonChoices(true);
            resetBtn.style.display = 'inline-block';
       } else if (humanScore === computerScore) {
            finalResult.textContent = ("It's a tie! Sudden death initiated... next point wins!");
            isTieBreaker = true;
            roundInfo.textContent = '';
            resultLog.textContent = '';
       } else {
            finalResult.textContent = lossMsg;
            disableButtonChoices(true);
            resetBtn.style.display = 'inline-block';
       }
    }
}


   

    /* Who likes to end in a tie? tieBreaker() ensures they're always a winner */

   function tieBreaker(humanChoice, computerChoice) {
        roundInfo.textContent = 'Sudden death round!';

        if (
            (humanChoice === rock && computerChoice === scissors) ||
            (humanChoice === paper && computerChoice === rock) || 
            (humanChoice === scissors && computerChoice === paper) 
         ) {
            resultLog.textContent = (`Player: ${humanChoice} - Computer: ${computerChoice}`);
            humanScore++;
            scoreBoard.textContent = (`You: ${humanScore} - Computer: ${computerScore}`);
            finalResult.textContent = winMsg;
            roundInfo.textContent = '';
            disableButtonChoices(true);
            resetBtn.style.display = 'inline-block';
       } else if (humanChoice === computerChoice) {
            resultLog.textContent = (`Player: ${humanChoice} - Computer: ${computerChoice}`);
            finalResult.textContent = ("Neither side yields... sudden death continues");
       } else {
            resultLog.textContent = (`Player: ${humanChoice} - Computer: ${computerChoice}`);
            computerScore++;
            scoreBoard.textContent = (`You: ${humanScore} - Computer: ${computerScore}`);
            finalResult.textContent = lossMsg;
            roundInfo.textContent = '';
            disableButtonChoices(true);
            resetBtn.style.display = 'inline-block';
     }

}

rockBtn.addEventListener('click', () => {
   if (isTieBreaker) {
    tieBreaker(rock, getComputerChoice());
   } else {
    playRound(rock, getComputerChoice());
   }
});

paperBtn.addEventListener('click', () => {
  if(isTieBreaker) {
    tieBreaker(paper, getComputerChoice());
  } else {
    playRound(paper, getComputerChoice());
  }  
});

scissorBtn.addEventListener('click', () => {
    if (isTieBreaker) {
        tieBreaker(scissors, getComputerChoice());
    } else {
        playRound(scissors, getComputerChoice());
    }
});