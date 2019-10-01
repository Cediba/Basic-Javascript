//Version1

// var answer = prompt ("are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("are we there yet?");
// }

// alert("Yay we made it!")

// if(answer === "yes"){
//     alert("Yay we made it!")
// } else {
//     var answer = prompt ("are we there yet");
// }


// Version2

var answer = prompt ("are we there yet?");

while(answer.indexOf("yes") === -1){
    var answer = prompt("are we there yet?");
}

alert("Yay we made it!")

