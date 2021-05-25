// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // prompt for password length
  var passwordLength = window.prompt("please choose a password length between 8 and 128 characters");
  // if else statement to alert the user if they don't choose enough characters or if they choose too many

  
  // array for lower case characters
  var lowerCaseArray = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var lowerCase = window.confirm("would you like lower case characters?");
  // confirm for lower case characters
  // if confirm, select and log random characters for password generation
  // array for upper case characters
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var upperCase = window.confirm("would you like upper case characters?");
  // confirm for upper case characters
  // if confirm, select and log random uppercase characters for generation
  // array for numeric characters
  var numberCharactersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var numberCharacters = window.confirm("would you like numbers?")
  // confirm for numeric characters
  // if confirm select and log random numbers for generation
  // array for special characters
  var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "="]
  var specialCharacters = window.confirm("would you like special characters?")
  // confirm for special characters
  // if confirm select and log random special case characters for generations
  var passwordCharacters = [];
for (var i = 0; i < parseInt(passwordLength); i++) {
  if (lowerCase) {
    passwordCharacters.push(lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length - 1)])
  }
  if (upperCase) {
    passwordCharacters.push(upperCaseArray[Math.floor(Math.random()*upperCaseArray.length - 1)])
  }
  if (numberCharacters) {
    passwordCharacters.push(numberCharactersArray[Math.floor(Math.random()*numberCharactersArray.length - 1)])
  }
  if (specialCharacters) {
    passwordCharacters.push(specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length - 1)])
  }
  // add remaining if statements to the for loop
}
  // combine all logged data and generate password
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//generatePassword();