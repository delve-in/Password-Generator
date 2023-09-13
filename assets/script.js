// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  var passwordLen = window.prompt("How many characters would you like your password to contain")

  if (passwordLen < 8) {
    window.alert("Password length must be at least 8 characters");
    generatePassword();
  } else if(passwordLen > 128) {
    window.alert("Password length must be at max 128 characters")
    generatePassword();
  }  

  var isSpecialChar = window.confirm("Click OK to confirm including special characters.");
  var isNumeric = window.confirm("Click OK to confirm including numeric characters.");
  var isLowercase = window.confirm("Click OK to confirm including lowercase characters.");
  var isUppercase = window.confirm("Click OK to confirm including uppercase characters.");

  var selectionRange = [];
  var specialChar = '!\\"#$%&'+"'()*+,-./:;<=>?@[]^_`{|}~";
  var numeric = "0123456789";
  var alphabets = "abcdefghijklmnopqrstuvwxyz"; 
  var oneChar = 0;
  var password = '';

  if(isSpecialChar === false && isNumeric === false && isLowercase === false && isUppercase === false)
  {
    window.alert("Password must contain atleast one of the Characters");
    generatePassword();
  }

  if (isSpecialChar){
    selectionRange = selectionRange.concat(specialChar.split(''));
  }
  if(isNumeric){
    selectionRange = selectionRange.concat(numeric.split(''));
  }
  if(isLowercase){
    selectionRange = selectionRange.concat(alphabets.split(''));
  }
  if(isUppercase){
    alphabets = alphabets.toUpperCase();
    selectionRange = selectionRange.concat(alphabets.split(''));
  }

  for(var i = 0; i < passwordLen;i++){
    oneChar = Math.floor(Math.random()*selectionRange.length);
    password = password + selectionRange[oneChar];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


