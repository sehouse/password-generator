//DOM

var generateBtn = document.querySelector("#generate");

//arrays

var arraySpecial = ["!", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", ";", "#", ":", "@", "~", ",", ".", "/", "<", ">", "?"];

var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Event listener to check when the generate button is clicked and runs the functions to generate the password

generateBtn.addEventListener("click", generatePassword);

//Global Variables

var passwordLength;
var confirmSpecial;
var confirmLower;
var confirmUpper;
var confirmNumber;


function createPassword() {

  //Prompts and Alerts to check how long and what elements the user wants in their password

  passwordLength = prompt("How many characters would you like your password to contain? (Password must contain at least 8 characters and no more than 128 characters.)");

  //A while loop to make sure that the user length input is between 8 and 128 characters

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must contain between 8 and 128 characters. Please try again.")
    passwordLength = prompt("How many characters would you like your password to contain? (Password must contain at least 8 characters and no more than 128 characters.)");
  }
  passwordLength = parseInt(passwordLength);

  confirmSpecial = confirm("Click OK to confirm including special characters in your password.");

  confirmLower = confirm("Click ok to confirm including lowercase letters in your password.");

  confirmUpper = confirm("Click ok to confirm including uppercase letters in your password.");

  confirmNumber = confirm("Click ok to confirm including numbers in your password.")

  var passwordItems = []

  //If statements to check if the confirm is true and add the array elements to the array of items to choose from in the password

  if (confirmSpecial === true) {
    passwordItems = passwordItems.concat(arraySpecial);
  }

  if (confirmLower === true) {
    passwordItems = passwordItems.concat(arrayLower);
  }

  if (confirmUpper === true) {
    passwordItems = passwordItems.concat(arrayUpper);
  }

  if (confirmNumber === true) {
    passwordItems = passwordItems.concat(arrayNumber);
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordItems[Math.floor(Math.random() * passwordItems.length)];
  }

  return password;
}

//Write the created password to the HTML text area
function generatePassword() {
  var newPassword = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}