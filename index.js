// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
  "Y",
  "Z",
];


// Function to prompt user for password options
function getPasswordOptions() {
  let choiceChar = [];
  let passwordLength = parseInt(
    prompt(
      "What length would you like your password to be? (8 - 128 characters)"
    )
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter a number between 8 and 128");
    return false;
  }
  if (confirm("Click ok to include lowercase letters.")) {
    choiceChar = choiceChar.concat(lowerCasedCharacters);
  }

  if (confirm("Click ok to include uppercase letters.")) {
    choiceChar = choiceChar.concat(upperCasedCharacters);
  }

  if (confirm("Click ok to include symbols.")) {
    choiceChar = choiceChar.concat(specialCharacters);
  }

  if (confirm("Click ok to include Numbers.")) {
    choiceChar = choiceChar.concat(numericCharacters);
  }
  return {
    characters: choiceChar,
    length: passwordLength 
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

// Function to generate password with user input
function generatePassword() {
  var actualpassword = "";
  let options = getPasswordOptions();
  console.log(options)
  for (var i=0; i < options.length; i++) {
    actualpassword += getRandom(options.characters)
  }
  return actualpassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    console.log(password)

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
