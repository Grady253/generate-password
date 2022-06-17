// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordspecialCharacters;//This is for the special characters. 
var passwordLength;// this is for the length of the password.
var passwordCase;// Weather its upper case or lower case.
var passwordNum; // Numbers for the generate password.



function generatePassword() {
  console.log("you did it");
  passwordLength= prompt("Please enter the password length 8-128");

  if(passwordLength >= 8 && passwordLength <= 128){
    (confirm("Do you wish to have uppercase,lowercase, numbers, and symbols?"));
  } else{
    alert("Sorry that amount doesn't meet our password requirements.");
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  var upperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var lowerCaseLetter =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","m","w","x","y","z"];

  var passwordNumber  = [1,2,3,4,5,6,7,8,9,0];

  var passwordCharacter =["!","#",'"',"$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","_","{","|","}","`","~"];

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
