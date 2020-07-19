// let age = prompt("How old are you?", 50);
// let isUserConfirmed = confirm(`Are you sure you reached ${age}`);

// if (isUserConfirmed) {
//     alert(`You are ${age} year old!`);
// }
// else {
//     alert("You entered incorrect age!");
// }

let num1 ;
let num2 = prompt("Input number 2");

// let result = (num1 !== "" && num1 !== null && num1 !== undefined) ? num1 : num2;
let result = num1 ?? num2;
alert(`First non null value ${result}`);