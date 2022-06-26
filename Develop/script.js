// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters;//This is for the special characters. 
var passwordLength;// this is for the length of the password.
var upperCase;// Weather its upper case.
var lowerCase;// Weather it's lower case.
var passwordNumber; // Numbers for the generate password.

// My varibles that contain strings of letters, numbers, and characters to generate a random password.
var bigCray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lilCray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numRay  = [1,2,3,4,5,6,7,8,9,0];

var specialCray =  ["!","#",'"',"$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","_","{","|","}","`","~"];


// this is my function to get my random password generated. 
function generatePassword() {
  passwordLength= prompt("Please enter the password length 8-128");

  if(passwordLength >= 8 && passwordLength <= 128){
    confirmPrompt();
    result = "";
    length = 0;
    while (length < passwordLength){
      if(upperCase === true && length < passwordLength){
        result = result + bigCray[Math.floor(Math.random() *26)]
        length++
      };
      
      if (lowerCase === true && length < passwordLength){
        result = result + lilCray[Math.floor(Math.random() *26)]
       length++
      };

      if (passwordNumber === true && length < passwordLength){
       result = result + numRay[Math.floor(Math.random()*10)]
       length++
      };

      if (specialCharacter === true && length < passwordLength){
       result = result + specialCray[Math.floor(Math.random()*29)]
       length++
      };

    }
  
  }else {
    alert("Sorry that amount doesn't meet our password requirements.");//let them know they dont meet password requirements
  };

  return result;
};

//Ask the users questions in a pop-up box
function confirmPrompt(){
  upperCase = confirm("Would you like to have Upper case letters in your password?");

  lowerCase = confirm("Would you like to have lower case letters in your password?");

  passwordNumber = confirm("Would you like to have numbers in your password?");

  specialCharacter = confirm("Would you like to have special characters in your password?");
};


// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", password);
