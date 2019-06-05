// variables I'll need 
var character = [
    "BRIENNEOFTARTH",
    "GENDRY",
    "EDDARDSTARK",
    "YGRITTE",
    "DAARIONAHARIS",
    "MISSANDEI",
    "STANNIS",
    "RICKON",
    "THEHOUND",
    "KHALDROGO"]
var blanks = 0;
var blankgood = [];
var randomChar = "";
var letters = []
var wins = 0;
var losses = 0;
var wrong = [];
var guessesRemaining = 6;

// arrays
function Game() {
    randomChar = character[Math.floor(Math.random() * character.length)];
    letters = randomChar.split("");
    blanks = letters.length;

    for (var i = 0; i < blanks; i++) {
        blankgood.push("_");
    }

    document.getElementById("currentcharacter").innerHTML = "  " + blankgood.join("  ");

    console.log(letters);
    console.log(blanks)
    console.log(randomChar)
    console.log(blankgood)
}

