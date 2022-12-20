var characterLength = 8;
var choiceArr = [];

// Array of second criteria
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterArray = ["+", "=", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "<", ">", "?", "/", ",", "."];



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// new function for generate pass
function generatePassword(){
 
  var userChoice =prompt("How many characters do you want your password to be?");
  if (userChoice >= 8 && userChoice <= 128) {//continue 
    //another fuction for next criteria
} else {alert ("Must be within 8 and 128") 
    generatePassword()
  }



  return "generated password"
  
}
 function specialCriteria(){
  var userChoiceSpecial =confirm ("Are you sure");

 }