var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";
var special = "!#$%&()+<=>?@[]^~";

var generatePassword = function() {
    var characters = "";
    var result = "";
    var passLength = window.prompt("How long (between 8 and 128 characters) would you like your password to be?")
    console.log("I choose _ many characters: ", passLength);
    if (passLength < 8 || passLength > 128) {
        window.alert("You'll need to choose between 8 and 128 characters.  This password generator is not designed to work outside of those ranges.")
    } else {
        var confirmLower = window.confirm("Would you like lower case letters(abc) in your password?")
        if (confirmLower && confirmLower !== undefined) {
            characters += lower
        }
        var confirmUpper = window.confirm("Would you like UPPER case letters(ABC) in your password?")
        if (confirmUpper && confirmUpper !== undefined) {
            characters += upper
        }
        var confirmDigits = window.confirm("Would you like numbers(123) in your password?")
        if (confirmDigits && confirmDigits !== undefined) {
            characters += digits
        }
        var confirmSpecial = window.confirm("Would you like special characters(!@#$) in your password?")
        if (confirmSpecial && confirmSpecial !== undefined) {
            characters += special
        }
        for (var i = 0; i < passLength; i++) {
            var random = Math.floor(Math.random() * characters.length);
            result += characters[random];
        }
        if (!confirmUpper && !confirmLower && !confirmDigits && !confirmSpecial) {
            alert("You must pick at least one option")
            return false
        }

    }
    return result;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    console.log(password)
    if (password) passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);