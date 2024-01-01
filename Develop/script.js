// Assignment Code
var generateBtn = document.querySelector("#generate");

//Specifies Password Length Criteria
const minLength = 8; 
const maxLength = 128;


// Generating Password based on the criteria

function generatePassword(length) {

length = parseInt(length);
let password = '';
let characters = '';

//Password Criteria

const Criteria = {
  LowerCase: "abcdefghijklmnopqrstuvwxyz",
  UpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Numeric: "0123456789",
  Symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
 };

   // Password Prompts

   let includeLowercase = false;
   let includeUppercase = false;
   let includeNumeric = false; 
   let includeSymbols = false;
  
  do {
    includeLowercase = confirm("Select 'OK' to include lowercase letters");
    includeUppercase = confirm("Select 'OK' to include uppercase letters?");
    includeNumeric = confirm("Select 'OK' to include numerics?");
    includeSymbols = confirm("Select 'OK' to include symbols?");
  
   if (!(includeLowercase || includeUppercase || includeNumeric || includeSymbols)) {
    alert("Please choose at least one character type.");
  }
  } while (!(includeLowercase || includeUppercase || includeNumeric || includeSymbols));

  // Password Criteria Options

 if (includeLowercase) {
  characters += Criteria.LowerCase ;
 }

 if (includeUppercase) {
  characters += Criteria.UpperCase ;
 }

 if (includeNumeric) {
  characters += Criteria.Numeric ;
 }

 if (includeSymbols) {
  characters += Criteria.Symbols ;
 }

 if (characters === '') {
  alert("Please choose at least one character type.");
  return "";
 }

}

// Write password to the #password input
function writePassword() {
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
