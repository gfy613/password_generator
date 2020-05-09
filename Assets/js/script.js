// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Arrays
 var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var specialChar1 = ['~','!','@','#','$','%','^','&','*','(',')','_','+','=','-','`','<','>','?','/','[',']','{','}','.',','];
 var chooseChar = ['lower','upper','number','special'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
let genPass = '';
// Random number function

function randnum(x) {
  return (Math.floor(Math.random() * x));
 }
 // How many characters 8-128
 // Character prompt  
 
 var numChars =  prompt("How many characters do you want in your password between 8-128 characters");
 console.log("Number of Characters: " + numChars)

 if (numChars <8 || numChars>128){
   alert("You must choose between 8 and 128 characters")
   var numChars =  prompt("How many characters do you want in your password between 8-128 characters");
 }
 
 // Lower case letter prompt
 var lowerCase = confirm("Do you want to have lower case letters in the password?");
  console.log("Use lower case letters: " + lowerCase);

 // Capital letter prompt
 var upperCase = confirm("Do you want to have upper case letters in the password?");
 console.log("Use upper case letters: " + upperCase);

 // Numbers Prompt
  var nums = confirm("Do you want numbers in your password?");
 console.log("Use numbers: " + nums)

 // Special Character prompt
 var specialChar = confirm("Do you want special characters in your password?");
 console.log("Use special characters: " + specialChar)

//  Password generator function
 for ( i=0; i<numChars; i++) {
 
    var selectChar = chooseChar[randnum(4)];
    console.log(selectChar)
 
     // generate lower case letter
 
     if (lowerCase && selectChar === 'lower'){
      var nextChar =  letter[randnum(26)];
      genPass = genPass + nextChar;
     }
 
     // generate upper case letter
 
    else if (upperCase && selectChar === 'upper'){
     var nextChar =  upperLetter[randnum(26)];
      genPass = genPass + nextChar;
     }
 
     // Generate number 
 
     else if (nums && selectChar === 'number'){
       var nextChar =  randnum(10);
      genPass = genPass + nextChar;
      }
 
     // Generate special character
 
     else if (specialChar && selectChar === 'special'){
       var nextChar =  specialChar1[randnum(specialChar1.length)];
      genPass = genPass + nextChar;
     }
 
     else {
     i=i-1
     }
     console.log(genPass)
  
   }
   return genPass;
  }

