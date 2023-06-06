
/*
//Set up variables for a button, userChoice, and the generated password. Also set up arrays for all of the chracters needed for the password generation.
var generateBtn = document.querySelector("#generate");
let userChoice = [];
let generatedPassword = '';

const lowerCase = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
const upperCase = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const specialCharacters = ["'","!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\"",":",";","?",">","<",",",".","/","-","="];



// this function will call the generated password function, and will then print that generated password onto the screen.
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}
// here make a generate password function which will gather the user input about length and inclusions, keeping them serperate helps avoid an endless cycle as well as actually creating the password
function generatePassword() {
  // this function will gather the length using a prompt !hint you may have to return an array containing the input here if you are having trouble, aka [userPassLength]!
  function userInput() {
    let userPassLength = window.prompt("Please indicate desired password length: 8-128");
    alert("Value must be between 8-128");
        return userInput();  

  }
  console.log(userPassLength);
  return [userPassLength];

  //this function gathers user's inclusions (lowercase, uppercase, number, special) !hint return an array! *** bonus *** how can we ensure the user selects at least one option?
  function userConfirms() {
    let userLower = confirm("Do you want lowercase letters in your password?");
      console.log(userLower);
      let userUpper = confirm("Do you want uppercase letters in your password?");
      console.log(userUpper); 
      let userNumber = confirm("Do you want numbers in your password?");
      console.log(userNumber);
      let userSpecial = confirm("Do you want special characters in your password?");
      console.log(userSpecial);

    if (!userLower && !userUpper && !userNumber && !userSpecial) {
      alert("At least one must be selected");
      return userConfirms();
    }
  
    return [userLower, userUpper, userNumber, userSpecial]; 

    }

  }

  let userPassLengthHolder = userInput();
  //this step is only necessary if you returned an array from userInput()
  userPassLength = userPassLengthHolder[0];
  console.log(userPassLength);


//here we use the array returned from userConfirms() to select which inclusions the user wants in their password. 
  let userBoolean = userConfirms();
  console.log(userBoolean);
  userLower = userBoolean[0];
  userUpper = userBoolean[1];
  userNumber = userBoolean[2];
  userSpecial = userBoolean[3];


  //here we need to use if statements to add the arrays of the desired inclusions to our userChoice array
  if (userLower) {
    userChoice = userChoice.concat(lowerCase);
    console.log(userChoice);

  }
  if (userUpper) {
    userChoice = userChoice.concat(upperCase);
    console.log(userChoice);

  }
  if (userNumber) {
    userChoice = userChoice.concat(numbers);
    console.log(userChoice);

  }
  if (userSpecial) {
    userChoice = userChoice.concat(specialCharacters);
    console.log(userChoice);
  

//here we will actually create our password
  function createPassword() {
    //this is so the generator can be run over and over without refreshing the page.
    if (generatedPassword.length > 0) {
      generatedPassword = "";
    }
    //here will need to set up a loop that will make a random character for each character of the password
    for (let i = 0; i < userPassLength; i++) {
      
  }}
  createPassword ();
//now we need to check to ensure our password contains at least one of each of the inclusions requested !hint you need the .some array method here!
  if (userLower) {
    // checks generatedPassword if it contains at least one item in lowerCase
    let doesContainLower //?
    if (!doesContainLower) {
      return createPassword();
    }
  }
  
  if (userUpper) {
    // check generatedPassword if it contains at least one item in upperCase
    let doesContainUpper//?
    if (!doesContainUpper) {
      return createPassword();
    }
  }
  if (userNumber) {
    // check generatedPassword if it contains at least one item in numbers
    let doesContainNumber //?
    if (!doesContainNumber) {
      return createPassword();
    }
  }
  if (userSpecial) {
    // check generatedPassword if it contains at least one item in specialCharacters
    let doesContainSpecial //?
    if (!doesContainSpecial) {
      return createPassword();
    }
  }
  return generatedPassword;
}

// add an event listener to your button to run the write password function

*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables i have made
const lowerCase = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
const upperCase = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const specialCharacters = ["'","!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\"",":",";","?",">","<",",",".","/","-","="];
let userChoice = [];
let generatedPassword = "";


// function init (){
  // userChoice = [];

  
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  function userInput() {
    let userPassLength = window.prompt(
      "Please indicate desired password length: 8-128");
      if (userPassLength<8 || userPassLength>128) {
        alert("Value must be between 8-128");
        return userInput();  
      }
      console.log(userPassLength);
      return [userPassLength];
  }
  function userConfirms() {
      let userLower = confirm("Do you want lowercase letters in your password?");
      console.log(userLower);
      let userUpper = confirm("Do you want uppercase letters in your password?");
      console.log(userUpper); 
      let userNumber = confirm("Do you want numbers in your password?");
      console.log(userNumber);
      let userSpecial = confirm("Do you want special characters in your password?");
      console.log(userSpecial);

    if (!userLower && !userUpper && !userNumber && !userSpecial) {
      alert("At least one must be selected");
      return userConfirms();
    }
  
    return [userLower, userUpper, userNumber, userSpecial]; 
  }
  let userPassLengthHolder = userInput();
  userPassLength = userPassLengthHolder[0];
  console.log(userPassLength);

  let userBoolean = userConfirms();
  console.log(userBoolean);
  userLower = userBoolean[0];
  userUpper = userBoolean[1];
  userNumber = userBoolean[2];
  userSpecial = userBoolean[3];

  if (userLower) {
    userChoice = userChoice.concat(lowerCase);
    console.log(userChoice);
  }
  if (userUpper) {
    userChoice = userChoice.concat(upperCase);
    console.log(userChoice);
  }
  if (userNumber) {
    userChoice = userChoice.concat(numbers);
    console.log(userChoice);
  }
  if (userSpecial) {
    userChoice = userChoice.concat(specialCharacters);
    console.log(userChoice);
  }

for (let i = 0; i < userPassLength; i++) {
  let randomIndex = Math.floor(Math.random()*userChoice.length);
  let randomCharacter = userChoice[randomIndex];
  generatedPassword = generatedPassword.concat(randomCharacter);
  console.log(generatedPassword);
}
return generatedPassword;
}



// Add event listener to generate button
// generateBtn.addEventListener("click", init);
generateBtn.addEventListener("click", writePassword);

