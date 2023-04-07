// Assignment code here

function generatePassword(){

  // Setting a word bank for all possible characters
  var characterTypesOptions = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    specialCharacters: "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"
  }

  // prompt change
  var message = "What length would you like your passoword to be (8-128) ?";
  var message2 = "Lowest level of security will deafault to include lower case characters only: \n \n Would you like to include uppercase characters (y/n) ?"
  var message3 = "Would you like to include numeric values (y/n)?"
  var message4 = "Would you like to include special characters (y/n)?"

  var generatedPassword = "";

  // prompt that ask user to include certain type of character and stores users respones.
  // user input error handling added as well
  var passwordLength = prompt(message);
  if(passwordLength < 8){
    alert("Password length must be greater than eight");
    passwordLength = prompt(message);
  }

  // prompt that ask user to include certain type of character and stores users respones.
  // user input error handling added as well
  var uppercaseValues = prompt(message2);
  if(uppercaseValues != "y"|"n"){
    alert("Response must be 'y' or 'n'. ");
    uppercaseValues = prompt(message2);
  }

  // prompt that ask user to include certain type of character and stores users respones.
  // user input error handling added as well
  var numeric = prompt(message3);
  if(numeric != "y"|"n"){
    alert("response must be 'y' or 'n'. ");
    numeric = prompt(message3);
  }

  // prompt that ask user to include certain type of character and stores users respones.
  // user input error handling added as well
  var SpecialCharacters = prompt(message4);
  if(SpecialCharacters != "y"|"n"){
    alert("response must be 'y' or 'n'. ");
    SpecialCharacters = prompt(message4);
  }

  // while loop cycles through code inside while we still have room in our password length to populate
  while(passwordLength != 0){
    //generate random number will ensure condition iterations will be less than the amount of characters left to populate
    // /3 will ensure each character criteria will get a higher chance to be added will smaller password lengths like 8.
    var randomNumber = Math.floor(Math.random() * passwordLength)/3;
  
    // this for loop adds random amout of LOWERCASE values at random locations with gaurenttee not to take up all spaces in password length
    for(i = 0; i <= randomNumber; i++){
      randomLowercase = characterTypesOptions.lowercase[Math.floor(Math.random() * characterTypesOptions.lowercase.length)];
      generatedPassword = generatedPassword.concat(randomLowercase);
      --passwordLength;
    }
    // resets the random number to new password length
    randomNumber = Math.floor(Math.random() * passwordLength)/3;
    
    // if 'y' is selected for loop adds random amout of UPPERCASE values at random locations
    if(uppercaseValues === "y"){
      for(i=0; i < randomNumber; i++){
        randomUppercase = characterTypesOptions.uppercase[Math.floor(Math.random() * characterTypesOptions.uppercase.length)];
        generatedPassword = generatedPassword.concat(randomUppercase);
        --passwordLength;
      }
    }
    // resets the random number to new password length
    randomNumber = Math.floor(Math.random() * passwordLength)/3;

    // if 'y' is selected for loop adds random amout of NUMERIC values at random locations
    if(numeric === "y"){
      for(i=0; i < randomNumber; i++){
        randomNumericValue = characterTypesOptions.numeric[Math.floor(Math.random() * characterTypesOptions.numeric.length)];
        generatedPassword = generatedPassword.concat(randomNumericValue);
        --passwordLength;
      }
    }
    // resets the random number to new password length
    randomNumber = Math.floor(Math.random() * passwordLength)/3;

    // if 'y' is selected for loop adds random amout of NUMERIC values at random locations
    if(SpecialCharacters === "y"){
      for(i=0; i < randomNumber; i++){
        randomSpecialCharacterValue = characterTypesOptions.specialCharacters[Math.floor(Math.random() * characterTypesOptions.specialCharacters.length)];
        generatedPassword = generatedPassword.concat(randomSpecialCharacterValue);
        --passwordLength;
      }
    }
  }
  generatedPassword = generatedPassword.split('').sort(function(){return 0.5-Math.random()}).join('');
  return generatedPassword;
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
