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
var selectLength = function() {
var length = parseInt(window.prompt("Choose a password length between 8 and 128."));
    console.log("length = " + length);
    if (length >= 8 && length <= 128){
      return length;
    }
    else {
      window.alert("You need to choose a value between 8 and 128");
      selectLength();
    }
  }

function generatePassword() {
    
  var length = selectLength();

  // confirm UPPERCASE
  var confirmUppercase = window.confirm("Would you like to include Uppercase letters?");
    if (confirmUppercase === true) {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else {
      uppercase = "";
      console.log("uppercase not selected");
    }
    console.log(uppercase);
  
  // confirm lowercase
  var confirmLowercase = window.confirm("Would you like to include lowercase letters?");
    if (confirmLowercase === true) {
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
    }
    else {
      lowercase = "";
      console.log("lowercase not selected");
    }
    console.log(lowercase);
  
  // confirm numbers
  var confirmNumbers = window.confirm("Would you like to include numbers?");
    if (confirmNumbers === true){
      var numbers = "0123456789";
    }
    else {
      numbers = "";
      console.log("numbers not selected");
    }
    console.log(numbers);
  
  // confirm symbols
  var confirmSymbols = window.confirm("Would you like to include symbols?");
    if (confirmSymbols === true){
      var symbols = "!@#$%^&*()/\<>?=-~`;:{}[].,";
    }
    else {
      symbols = "";
      console.log("symbols not selected");
    }
    console.log(symbols);

// combine selected options (unselected options added as "")
var combine = uppercase + lowercase + numbers + symbols;
console.log("combined array = " + combine);

// if combine is blank, no option has been selected, restart
if (combine === ""){
  window.alert("You need to choose at least one character type");
  generatePassword();
}

// start as blank, incrementally select random character from var combine
var password = "";
    for (i=0; i < length; i++) {
      // choose random character from combined index (i.e ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890)
      var characterIndex = Math.floor(Math.random() * (combine.length));
      console.log(characterIndex);
      password += combine.substring(characterIndex, characterIndex + 1);
      console.log(password);
  }
  return password;
};
