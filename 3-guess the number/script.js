const body = document.querySelector( "body" );
body.style.backgroundImage = "url(./img.jpg)";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "norepeat";
let randomNumber = Math.floor( Math.random() * 100 + 1 );
let n = 7;
const tries = document.querySelector( ".Tries-output" );
const p1 = document.createElement( "p" );
tries.innerText = `Number of Tries: ${ n }`;

tries.append( p1 );

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector( '.inputs-Values' ).value;
  const final = document.querySelector( ".final-output" );

  if ( guess > 100 || guess < 0 || guess == "" ) {

    final.innerText = "Please enter a number between 1 and 100";
    return 0;

  }

  if ( n > 0 ) {

    if ( randomNumber < guess ) {

      final.innerText = "Number is too high, try again";

    } else if ( randomNumber > guess ) {

      final.innerText = "Number is too low, try again";

    } else if ( randomNumber == guess ) {

      final.innerText = "Guess is correct. You win!";

    }


    tries.innerText = `Number of Tries: ${ --n }`;

  } else if ( n <= 0 ) {

    final.innerText = `You Lose, the number was ${ randomNumber }`;
  }


  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}


// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user

  const btnewGame = document.querySelector( ".btnNewGame" );

  btnewGame.addEventListener( "click", () => {

    location.href = "./index.html";

  } );

}

document.querySelector( '.btnGuess' ).addEventListener( 'click', guessNumber );

newGame();