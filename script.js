// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for password choices
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ":", ";", "<", ">", ",", ".", "[", "]", "{", "}", "?", "/"]




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Defines generatePassword function
function generatePassword() {

  //User prompted to enter character length
  var numChar = parseInt(prompt("How many characters between 8 and 88 do you want?"));

  //Container variable for storing all possible characters of selected criteria
  var pickedCharArr = [];

  //Container variable for stored generated password
  var randomGen = "";

  if (numChar >= 8 && numChar <= 88) {

    //Asks user if they want lowercase letters
    if (confirm("Do you want to include lowercase letters?")) {
      pickedCharArr.push(lowerLetters);
    }

    //Asks user if they want uppercase letters
    if (confirm("Do you want to include uppercase letters?")) {
      pickedCharArr.push(upperLetters);
    }

    //Asks user if they want numbers
    if (confirm("Do you want to include numbers?")) {
      pickedCharArr.push(num);
    }

    //Asks user if they want special characters
    if (confirm("Do you want to include special characters?")) {
      pickedCharArr.push(specChar);
    }

    //Iterates through characters to match selected length
    for (var i = 0; i < numChar; i++) {
      var randomCharType = Math.floor(Math.random() * pickedCharArr.length);
      var randomCharacter = Math.floor(Math.random() * pickedCharArr[randomCharType].length);
      var randomPick = pickedCharArr[randomCharType][randomCharacter];
      randomGen += randomPick;
    }
    return randomGen
  }

  else {
    alert("Invalid character number!")
    return "Try generating another password and this time give me something I can work with!"
  }
}

//Displays error message when the number of characters is not between 8 and 88


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
