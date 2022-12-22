// Arrays of second criteria
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterArray = ["+", "=", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "<", ">", "?", "/", ",", "."];
var characterLength = 0;
var choiceArray = [];


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

// new function for generate pass
function generatePassword(){
    var password = "";
    for (var index = 0; index < characterLength; index++) {
        var randomNumber = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomNumber];
        }
        return password;
}
//function for getting proper criteria
function getCriteria(){
  choiceArray = [];
  //first criteria, how many?
      //parseInt make into a number
    characterLength = parseInt(prompt("How many characters do you want your password to be?"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert ("Must be a number within 8 and 128") 
      return getCriteria();
    }

//individual confirmations of criteria
  var lowerCase = confirm("Include lowercase characters?") 
    if (lowerCase) {
      choiceArray = choiceArray.concat(lowerCaseArray);
    }
  var upperCase = confirm("Include uppercase characters?")
    if (upperCase) {
      choiceArray = choiceArray.concat(upperCaseArray);
    }
  var numberChar = confirm("Include number characters?") 
    if (numberChar) {
      choiceArray = choiceArray.concat(numberArray);
    }
  var specialChar = confirm("Include special characters?") 
    if (specialChar) {
      choiceArray = choiceArray.concat(specialCharacterArray);
    }

    if (!lowerCase && !upperCase && !numberChar && !specialChar) {
      alert ("you have to pick one!")
      return null
    }
    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);