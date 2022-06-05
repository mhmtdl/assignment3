const computerPlay = () => {
     const randomNumber = (Math.floor(Math.random()*3));
    if(randomNumber === 0) {
        return 'Rock';
    }
    else if ((randomNumber=== 1)) {
        return 'Paper';
    }
    else if (randomNumber=== 2) {
        return 'Scissors'
    }
   
  

}
//console.log(computerPlay());

function playRound(playerSelection,computerSelection) {
    if(playerSelection.toLowerCase()==='rock') {
        if(computerSelection === 'paper') {
            return 'You lose!Paper beats you '
        }
        else if (computerSelection === 'rock') {
            return 'tie'
        }
        else {
            return 'You win'
        }
    }
    if(playerSelection.toLowerCase()=== 'scissors') {
        if(computerSelection === 'paper') {
            return 'Ýou win';
        }
        else if (computerSelection === 'rock') {
            return 'You lose! Rock beats you'
        }
        else {
            return 'tie'
        }
    }
    if(playerSelection.toLowerCase()=== 'paper') {
        if(computerSelection === 'paper') {
            return 'tie';
        }
        else if (computerSelection === 'rock') {
            return 'You win'
        }
        else {
            return 'You lose!'
        }
    }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);

for(let i=0;i<5;i++) {
    let playerSelection = prompt('Pick a move');
    const computerSelection =computerPlay()
    console.log(playRound(playerSelection,computerSelection));
    console.log("your score = " + userScore);
    console.log("Computer score = " + computerScore)

}

