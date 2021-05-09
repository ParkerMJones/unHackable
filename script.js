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


// select length
function selectLength() {
var input = parseInt(window.prompt("Choose a password length between 8 and 128."));
length = input;
    console.log("user input = " + length);
    if (length < 8 || length > 128 || Number.isInteger(length) === false) {
      window.alert("You need to choose a value between 8 and 128");
      selectLength();
      }
        console.log("return length = " + length);
        return length;
 };


// select characters to be included
function characterType() {
  // confirm UPPERCASE
  password = "";
  var confirmUppercase = window.confirm("Would you like to include Uppercase letters?");
    if (confirmUppercase === true) {
      password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(password);
    }
    
  // confirm lowercase
  var confirmLowercase = window.confirm("Would you like to include lowercase letters?");
    if (confirmLowercase === true) {
      password += "abcdefghijklmnopqrstuvwxyz";
      console.log(password);
    }
    
  // confirm numbers
  var confirmNumbers = window.confirm("Would you like to include numbers?");
    if (confirmNumbers === true){
      password += "0123456789";
      console.log(password);
    }
    
    
  // confirm symbols
  var confirmSymbols = window.confirm("Would you like to include symbols?");
    if (confirmSymbols === true){
      password += "!@#$%^&*()/<>?=-~`;:{}[].,";
      console.log(password);
    }
    

    console.log("before if " + password);
    if (password === ""){
      window.alert("You need to choose at least one character type");
      characterType();
    }
  
  console.log("after if " + password);
  return password;
};


var generatePassword = function() {
  finalPassword = "";
  var length = selectLength();
  var characters = characterType();
  console.log("password.length = " + characters.length);
  
  // incrementally select random character from password();
    for (i = 0; i < length; i++) {
      // choose random character from combined index (i.e ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890)
      var characterIndex = Math.floor(Math.random() * characters.length);
      // build password by 1 character per loop
      finalPassword += characters.charAt(characterIndex);
      console.log("index # " + characterIndex);
      console.log("password += " + finalPassword);
  }
    console.log("Final Password = " + finalPassword);
    return finalPassword;
};



    





