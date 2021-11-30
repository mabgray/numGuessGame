function runGame(){
   let target = Math.floor(Math.random() * 100);
   let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    do{
       
    }while (!correct) {
        guessString = parseInt(prompt("pick a number between 1 - 100"));
  
        numTries++;
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    }
}