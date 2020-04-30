// create secretNumber
const secretNumber = 13;

// ask useer for Guessing
let stringguess = (prompt("Guess a number"));
let guess = Number(stringguess)

// check Guess
if (guess === secretNumber) {
  alert("You Got It!!")
}
// check if guess is higher
else if (guess > secretNumber){
  alert("Too high. Guess again!");
}

// otherwise, check if lower
else {
  alert("Too low, Guess again!");
}
