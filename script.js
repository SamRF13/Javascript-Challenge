
  var specialCharacters = "=!#$%"
  var numbers = "0123456789"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   
// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// Write password to the #password input
function writePassword() {
  console.log("functionStarted");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }



function generatePassword()
{ 
  var characters = "";
  console.log(characters);
//(+=)  con

  var passLength = prompt("Choose password length (8-124)");
  console.log(passLength);


  if (!isFinite(passLength)) {
    alert ("You should choose a value between 8-124")
    
    
    return "Please try again" ;
  }

if (passLength <8 || passLength > 124 ) {
  alert ("Please choose a number between 8 and 124");
  return "Please try again" ;
 }

  var chooseUpper = confirm("Do you want uppercase characters in your password?")    

if (chooseUpper) {characters = characters + uppercase}
 
 var chooseNum = confirm("Do you want numbers in your password?")    
  
if (chooseNum) {characters = characters + numbers}

var chooseSpecial = confirm("Do you want special characters in your password?")

if (chooseSpecial) {characters = characters + specialCharacters}

var chooseLower = confirm("Do you want lowercase characters in your password?")
if (chooseLower) {characters = characters + lowercase}

//console.log(characters);

if (characters == "") {
  alert(" You should choose values in your password") 
  return (" Please try again")
} 

var finalpassword = "";


for (var i = 0; i <= passLength; i++) {
var randomIndex =  Math.floor(Math.random() * characters.length)
//console.log(characters[randomIndex]);

finalpassword = finalpassword + characters[randomIndex];


}

  
return finalpassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







 // Math.floor = redondea hacia abajo
  //Math.ceil = redonde habia arriba
  //math.random  número de 0 a 0.999999 
  // 0-9
  //window.promt. (a partir del 19) (26 javascript)   ()