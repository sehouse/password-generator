
var arraySpecial = ["!", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", ";", "#", ":", "@", "~", ",", ".", "/", "<", ">", "?"];
var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getRandomSpecial() {
  return arraySpecial[Math.floor(Math.random() * arraySpecial.length)];
}


console.log(getRandomSpecial());

var randNumber = Math.random();
randNumber = randNumber * arrayNumber.length;
randNumber = Math.floor(randNumber);
console.log(arrayNumber[randNumber]);

var randLower = Math.random();
randLower = randLower * arrayLower.length;
randLower = Math.floor(randLower);
console.log(arrayLower[randLower]);

var randUpper = Math.random();
randUpper = randUpper * arrayUpper.length;
randUpper = Math.floor(randUpper);
console.log(arrayUpper[randUpper]);