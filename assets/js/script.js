// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //Gets password length from user
  var passwordLength = window.prompt("How many characters would you like the password to be?");
    while (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be at least 8 characters and no longer than 128 characters.");
      passwordLength = window.prompt("How many characters would you like the password to be?");
    };  
  
  var upperCase = function () {
    //Gets random uppercase letter from array
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randUpper = upperCase[(Math.floor(Math.random () * upperCase.length))];  
  }

  var lowerCase = function () {
    //Gets random lowercase letter from array
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randLower = lowerCase[(Math.floor(Math.random () * lowerCase.length))];    
  }

  var numChar = function () {
    //Gets random number
    var randNumber = (Math.floor(Math.random() * 10));    
  }

  var specialChar = function () {
    //Gets random special character from array 
    var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "_", "{",  "}", "|"];
    var randSpecial = special[(Math.floor(Math.random () * special.length))];    
  }

  //Confirms including uppercase from user
  var confirmUpper = window.confirm("Click OK to confirm including uppercase characters.")  

  //Confirms including lowercase from user
  var confirmLower = window.confirm("Click OK to confirm including lowercase characters.")

  //Confirms including numeric characters from user
  var confirmNum = window.confirm("Click OK to confirm including numeric characters.")

  //Confirms including special characters from user
  var confirmSpecial = window.confirm("Click OK to confirm including special characters.")

  // for (var i=0; i<passwordLength; i++) {
  // var randAll = 
  // }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
