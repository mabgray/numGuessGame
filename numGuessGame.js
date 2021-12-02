function runGame(){
   let target = Math.floor(Math.random() * 100);
   let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    do{
        guessString = prompt("pick a number between 1 - 100");
        numTries++;
        guessNumber = +guessString;
        console.log(guessNumber);
        correct = checkGuess(guessNumber, target);

    }while (!correct) 

       
    alert("you have guessed correctly" + " it took you " + numTries);
}

function checkGuess(guessNumber, target){
    let correct = false;

    if(isNaN(guessNumber)){
        alert("you did not enter a number");
    } else if(guessNumber > 100 && guessNumber < 1) {
        alert("your number is out of range. Please pick a number. ");

    } else if (guessNumber > target){
        alert("your guess is above the target number.");

    }else if (guessNumber < target) {
        alert("Your guess is lower than the target number.");
    } else {
        correct = true;
    }
    return correct;
}