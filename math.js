// ?
// function addition(a, b){
//     console.log(a+b);
// }

// module.exports.addition = addition

// ?

// module.exports.addition = function addition(a, b){
//     console.log(`sum is ${a+b}`);
// }

// ?
// exports.subtraction = function subtraction(a, b){
//     console.log(`difference is ${a-b}`);
// }

// ?

let addition = (a, b, ...c) => {
    console.log(a+b+c);
}
let subtraction = (a, b) => {
    console.log(a-b);
}
let multiplication = (a, b) => {
    console.log(a*b);
}

exports.mathOperations = {addition, subtraction, multiplication}