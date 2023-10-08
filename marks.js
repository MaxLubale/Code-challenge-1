let prompt = require('prompt-sync')();
//get marks
let input = prompt('Enter Marks:')
let enteredGrade = parseFloat(input)
//check marks and assign grade
function gradeGenerator(y){

    if(y> 79 && y<101) return "A"
    else if (60<= y && y<= 79) return "B"
    else if (50<= y && y <= 59) return "C"
    else if (40<= y && y<= 49) return "D"
    else if(40>y) return "E"
    else return "Insert Valid Grade!"
}
//call out function
console.log(gradeGenerator(enteredGrade))