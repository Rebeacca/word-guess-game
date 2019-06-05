// variables I'll need 
let character = [
    "ARYA",
    "GENDRY",
    "JOFFREY",
    "YGRITTE",
    "DROGON",
    "MISSANDEI",
    "STANNIS",
    "RICKON",
    "TYRION",
    "VARYS"]
let blanks = 0;
let randomChar = "";
let letters = []
let blankgood = [];
let wins = 0;
let losses = 0;
let wrong = [];
let guessesRemaining = 6;

// pt1 
function Game() {
    randomChar = character[Math.floor(Math.random() * character.length)];
    letters = randomChar.split("");
    blanks = letters.length;

    for (var i = 0; i < blanks; i++) {
        blankgood.push("_");
    }

    document.getElementById("currentcharacter").innerHTML = "  " + blankgood.join("  ");

    console.log(randomChar);
    console.log(letters)
    console.log(blanks)
    console.log(blankgood)
}

// pt2 
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomChar[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomChar[i] == letter) {
                blankgood[i] = letter;
            }
        }
    }
    else {
        wrong.push(letter);
        guessesRemaining--;
    }
    console.log(blankgood);
}
// pt3 
function reset() {
    guessesRemaining = 6;
    wrong = [];
    blankgood = [];
    Game()
}

function complete() {
    console.log("wins:" + wins + "guesses remaining:" + guessesRemaining)
    if (letters.toString() == blankgood.toString()) {
        wins++;
        reset()
        document.getElementById("wins").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        reset()
    }

    document.getElementById("currentcharacter").innerHTML = "  " + blankgood.join(" ");
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
}

