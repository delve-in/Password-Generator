// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  // Declaring and defining variables

  var selectionRange = [];
  var specialChar = '!\\"#$%&'+"'()*+,-./:;<=>?@[]^_`{|}~";
  var numeric = "0123456789";
  var alphabets = "abcdefghijklmnopqrstuvwxyz"; 
  var oneChar
  var password = '';

  // Adding while loop to make sure there is a valid input from user

  while (true){

    // Gathering input for the length of the password from user
    var passwordLen = window.prompt("How many characters would you like your password to contain")

    // Checking if user pressed cancel or the character length is inside limits.

    if (passwordLen === null){
      password = "";
      return password;
    }else if (passwordLen < 8) {
      window.alert("Password length must be at least 8 characters");
    }else if(passwordLen > 128) {
        window.alert("Password length must be at max 128 characters")
    }else{
      break;
    }
  }

  // loop is used to keep asking the user for input until a valid one is recieved

  while (true){

    // Gathering input from user on the selection of characters

    var isSpecialChar = window.confirm("Click OK to confirm including special characters.");
    var isNumeric = window.confirm("Click OK to confirm including numeric characters.");
    var isLowercase = window.confirm("Click OK to confirm including lowercase characters.");
    var isUppercase = window.confirm("Click OK to confirm including uppercase characters.");

    // Checking if user has selected atleast one of the characters

    if(isSpecialChar === false && isNumeric === false && isLowercase === false && isUppercase === false){
      window.alert("Password must contain at least one character type");
    }else{
      break;
    }
  }

  // Checking what are the options selected by user and adding them to an array.

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

  // From the array generated by user's selection of charaters, random characters are chosen and returned as a string.
    
  for(var i = 0; i < passwordLen;i++){
    oneChar = Math.floor(Math.random()*selectionRange.length);
    password = password + selectionRange[oneChar];
    console.log(password);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


