// Create Prompts for user to input what characters they want
// in the password
// Character options:
// length: 8-28
// lowercase,uppercase,numeric and/or special character

// Generate a password based on user input and append password to html element
// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialList = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  ":",
  ";",
  '"',
  "",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
var selectedList = [];
let uppercaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "X",
  "Y",
  "Z",
];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  selectedList = [];
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePrompts() {
  var upper = prompt("Do you want upercase characters? y/n");
  var lower = prompt("Do you want lowercase characters? y/n");
  var num = prompt("Do you want numbers? y/n");
  var special = prompt("Do you want special characters? y/n");

  if (upper === "y") {
    selectedList = uppercaseList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
  if (lower === "y") {
    selectedList = alphList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
  if (num === "y") {
    selectedList = numList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
  if (special === "y") {
    selectedList = specialList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
}

function generatePassword() {
  generatePrompts();
  var length = prompt("How many characters in the password? 8-128");
  var pass = "";
  if (isNaN(length)) {
    console.log("Numbers only!");
  } else if (length < 8 || length > 128) {
    console.log("Please choose a number from 8-28");
    length = null;
  }
  for (let i = 0; i < selectedList.length; i++) {
    var index = Math.floor(Math.random() * selectedList.length);
    pass += selectedList[index];
  }
  return pass.slice(0, length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
