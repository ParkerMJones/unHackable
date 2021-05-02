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

/* password components
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()/\<>?=-~`;:{}[].,";
*/

// select length
/* var selectLength = function() {
var length = parseInt(window.prompt("Choose a password length between 8 and 128."));
    console.log("length = " + length);
    if (length >= 8 && length <= 128){
      return length;
    }
    else {
      window.alert("You need to choose a value between 8 and 128");
      selectLength();
    }
  } */

var generatePassword = function() {

  var length = parseInt(window.prompt("Choose a password length between 8 and 128."));
    console.log("length = " + length);
    if (length >= 8 && length <= 128){
      var length = length;
    }
    else {
      window.alert("You need to choose a value between 8 and 128");
      generatePassword();
    }
  
  // confirm UPPERCASE
  var confirmUppercase = window.confirm("Would you like to include Uppercase letters?");
    if (confirmUppercase === true) {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(uppercase);
    }
    else {
      uppercase = "";
      console.log("uppercase not selected");
    }
    
  // confirm lowercase
  var confirmLowercase = window.confirm("Would you like to include lowercase letters?");
    if (confirmLowercase === true) {
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      console.log(lowercase);
    }
    else {
      lowercase = "";
      console.log("lowercase not selected");
    }
    
  // confirm numbers
  var confirmNumbers = window.confirm("Would you like to include numbers?");
    if (confirmNumbers === true){
      var numbers = "0123456789";
      console.log(numbers);
    }
    else {
      numbers = "";
      console.log("numbers not selected");
    }
    
  // confirm symbols
  var confirmSymbols = window.confirm("Would you like to include symbols?");
    if (confirmSymbols === true){
      var symbols = "!@#$%^&*()/<>?=-~`;:{}[].,";
      console.log(symbols);
    }
    else {
      symbols = "";
      console.log("symbols not selected");
    }
    
// combine selected options (unselected options added as "")
var combine = uppercase + lowercase + numbers + symbols;
console.log("combined array = " + combine);

// start as blank, incrementally select random character from var combine
var password = "";
    for (i=0; i < length; i++) {
      // choose random character from combined index (i.e ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890)
      var characterIndex = Math.floor(Math.random() * combine.length);
      console.log("Index # " + characterIndex);
      password += combine.substring(characterIndex, characterIndex + 1);
      console.log(password);
  }
  // if combine is blank, no option has been selected, restart
/*  if (password === ""){
    window.alert("You need to choose at least one character type");
    generatePassword();
  } */
    if (password === ""){
      window.alert("You need to choose at least one character type");
      generatePassword();
    }
    console.log("Password is " + password);
    return password;
};
