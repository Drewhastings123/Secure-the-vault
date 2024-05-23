//Create a dialog box with a string and assigned variables
let text =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
console.log(text);
const num = 20;
//Create variables using simple equations
let num1 = num / 2;
console.log(num1);
let num2 = num * 2;
console.log(`${text} ${num1} ${num2}`);
let num3 = num2 - 1;
console.log(num3);
console.log(`${text} ${num1} ${num2} ${num3}`);
//Add the dialog box with the vault codes
alert(`${text} ${num1} ${num2} ${num3}`);
