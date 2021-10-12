// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //Gets password length from user
  var passwordLength = window.prompt("How many characters would you like the password to be?");
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Password length must be at least 8 characters and no longer than 128 characters.");
      passwordLength = window.prompt("How many characters would you like the password to be?");
    };  
  
  //Creates an empty array
  var allChar = [];

  //Confirms including uppercase characters from user
  var confirmUpper = window.confirm("Click OK to confirm including uppercase characters.");
  
  //Confirms including lowercase characters from user
  var confirmLower = window.confirm("Click OK to confirm including lowercase characters.")  
  
  //Confirms including numeric characters from user
  var confirmNum = window.confirm("Click OK to confirm including numeric characters.")  
  
  //Confirms including special characters from user
  var confirmSpecial = window.confirm("Click OK to confirm including special characters.")
  
  //Creates array of upperCase characters
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  //Creates array of lowercase characters
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //Creates array of special characters 
  var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "_", "{",  "}", "|"];

  //Creates a for loop to keep run as many times as the password length
  for (var i=0; i<passwordLength; i++) {
    //if statement to run as long as the password length is the same as the allchar array length
    if (allChar.length < passwordLength) {
      //Gets random uppercase character from uppercase characters array
      var randUpper = upperCase[(Math.floor(Math.random () * upperCase.length))];
      
      //If statement to check if user wanted uppercase characters and add it to the empty array
      if (confirmUpper == true) {
      allChar.push(randUpper);
      }

      //Gets random lowercase character from lowercase characters array
      var randLower = lowerCase[(Math.floor(Math.random () * lowerCase.length))]; 
      
      //If statement to check if user wanted lowercase characters and add it to the empty array
      if (confirmLower == true) {
      allChar.push(randLower);
      }

      //Creates a random number from 0-9
      var randNumber = (Math.floor(Math.random() * 10));

      //If statement to check if user wanted numeric characters and add it to the empty array
      if (confirmNum == true) {
      allChar.push(randNumber);
      }

      //Gets random special character from special characters array
      var randSpecial = special[(Math.floor(Math.random () * special.length))];

      //If statement to check if user wanted special characters and add it to the empty array
      if (confirmSpecial == true) {
      allChar.push(randSpecial);
      }
    } 
  }

  //Randomizes the values of the allChar array
  allChar.sort((a,b) => 0.5 - Math.random());
  
  //Creates the final password as a string of all the values in the allChar array without commas
  var finalPassword = allChar.join("");

  //Displays the finalPassword
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
