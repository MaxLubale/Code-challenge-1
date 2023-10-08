
let prompt = require('prompt-sync')();
let input = prompt('Enter speed:')
let enteredSpeed = parseFloat(input)



const limit = 70
//create a function that prints ok when speed is less than 70
function  checkSpeed(speed) {
    if (speed < 70) {
       return "Ok";
    } else { 
       let points = Math.floor((speed - 70) / 5);
       if (points > 12) {
         return "License suspended";
       } else {
         return `Points: ${points}`;
       

       }
    }
   }
   




// call out function

console.log( checkSpeed(enteredSpeed))