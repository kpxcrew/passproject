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

function generatePassword(){
  var userChoice =prompt("how many");
  if (userChoice >= 8 && userChoice < 128) {//continue 
    //another fuction for next criteria
} else {alert ("Must be within 8 and 128") 
    generatePassword()
  }
 
  
}
 function specialCriteria(){
  var userChoiceSpecial =confirm ("Are you sure");

 }