var characterLength = 0;
var choiceArray = [];

// Array of second criteria
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterArray = ["+", "=", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "<", ">", "?", "/", ",", "."];



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var yesPrompts = getCriteria();
    var passwordText = document.querySelector("#password");

    if (yesPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// new function for generate pass
function generatePassword(){
    var password = "";
    for (var index = 0; index < characterLength; index++) {
        var randomNumber = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomNumber];
        }
        return password;
}
//function for
function getCriteria(){
  choiceArray = [];
      //parseInt make into a number
    characterLength = parseInt(prompt("How many characters do you want your password to be?"));
    
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert ("Must be a number within 8 and 128") 
      return getCriteria();
      
  }

  if (confirm("Include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm("Include uppercase characters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm("Include number characters?")) {
    choiceArray = choiceArray.concat(numberArray);
  }

  if (confirm("Include special characters?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  return true;
}
