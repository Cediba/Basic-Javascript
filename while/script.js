// var stringGuess = prompt ("Guess a number");
// var guess = Number(stringGuess);

// //check if guess is right
// if(guess === secretNumber){
//     alert("You got it right");
// }
// else if (guess > secretNumber){
//     alert("Too high. Guess again!");
// }
// else{
//     alert("Too low. Guess again!");
// }

alert("Connected");

console.log("Printing all numbers between -10 and 19");
var counter = -10;
while (counter < 20){
    console.log(counter);
    counter++;
}

console.log("Printing all numbers between 10 and 40");
var counter = 10;
while (counter < 41){
    console.log(counter);
    counter+=2;
}

console.log("Printing all numbers between 300 and 333");
var counter = 300;
while (counter < 334){
    if(counter % 2 !==0){
    console.log(counter);
    }
    counter++;
}

console.log("Printing all numbers divisible by 5 and 3 between 5 and 50");
var counter = 5;
while (counter < 50){
    if(counter % 5 ===0 && counter % 3 === 0){
    console.log(counter);
    }
    counter++;
}