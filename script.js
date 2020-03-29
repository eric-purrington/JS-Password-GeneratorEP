// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

    // Prompts the user about length of password
    var howLong = prompt("What length of password would you like? (between 8 and 128 characters)");
    howLong = parseInt(howLong);
    // Changes recieved string into integer 
    howLong = parseInt(howLong);

    if (howLong < 8) {
        alert("Error: Must be at least 8 characters long.")
        return "Try again";
    } else if (howLong > 128) {
        alert("Error: Password cannot exceed 128 characters.")
        return "Try again";
    }
    // Asks series of questions about characters used in password
    var lclChar = confirm("Would you like to include lowercase letters? e.g. vwei");
    var uclChar = confirm("Would you like to include uppercase letter? e.g. APRD");
    var numChar = confirm("Would you like to include numeric characters? e.g. 2345");
    var speChar = confirm("Would you like to include special character? e.g. !&[@");

    // Defines what each group includes
    var lcl = "abcdefghijklmnopqrstuvwxyz";
    var ucl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var spe = " !#$%&()*+,-./:;<=>?@[\\]^_`{|}~\'\"";

    // Defines password as a string
    var password = "";

    // Creates empty string all that fills (or doesn't) with each if statement
    var all = "";
    if (lclChar) {
        all += lcl;
    }
    if (uclChar) {
        all += ucl;
    }
    if (numChar) {
        all += num;
    }
    if (speChar) {
        all += spe;
    } else {
        alert("Error: Cannot form password with no characters. Please try again.")
        return "Try again";
    }

    // runs through the desired length of password times
    for (i = 0; i < howLong; i++) {

        // RanChar picks a random char all
        var ranChar = all[Math.floor(Math.random() * all.length)];
        
        // adds ranChar to password
        password += ranChar;
    }
    
    // returns password to writepassword function
    return password;
}
  
//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
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
  