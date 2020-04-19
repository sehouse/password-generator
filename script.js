//DOM
var generateBtn = document.querySelector("#generate");

//arrays
var arraySpecial = ["!", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", ";", "#", ":", "@", "~", ",", ".", "/", "<", ">", "?"];
var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

generateBtn.addEventListener("click", function (writePassword);

var passwordLength;
var confirmSpecial;
var confirmLower;
var confirmUpper;


function generatePassword() {

  passwordLength = prompt("How many characters would you like your password to contain? (Password must contain at least 8 characters and no more than 128 characters.)");

  passwordLength = parseInt(passwordLength);

  confirmSpecial = confirm("Click OK to confirm including special characters.");

  confirmLower = confirm("Click ok to confirm including lowercase characters.");

  confirmUpper = confirm("Click ok to confirm including uppercase characters.");
}
console.log(passwordLength, confirmSpecial, confirmLower, confirmUpper);

function getRandomSpecial() {
  return arraySpecial[Math.floor(Math.random() * arraySpecial.length)];
}

console.log(getRandomSpecial());

function getRandomNumber() {
  return arrayNumber[Math.floor(Math.random() * arrayNumber.length)];
}

console.log(getRandomNumber());

function getRandomLower() {
  return arrayLower[Math.floor(Math.random() * arrayLower.length)];
}

console.log(getRandomLower());

function getRandomUpper() {
  return arrayUpper[Math.floor(Math.random() * arrayUpper.length)];
}