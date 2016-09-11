//Features of Morse Code Translator library
//1) Translate text to morse code and vice versa
//2) Convert morse code to sound and image
//3) Email message

var MorseCode = (function () {
    var morseCode = {},
        morseCharacter = new Object();
        
    //Brackets are an alternative way to display properties instead of the period.  Brackets are also used in Objective C
    morseCharacter["A"] = ".-";
    morseCharacter["B"] = "-...";
    morseCharacter["C"] = "-.-.";
    morseCharacter["D"] = "-..";
    morseCharacter["E"] = ".";
    morseCharacter["F"] = "..-.";
    morseCharacter["G"] = "--.";
    morseCharacter["H"] = "....";
    morseCharacter["I"] = "..";
    morseCharacter["J"] = ".---";
    morseCharacter["K"] = "-.-";
    morseCharacter["L"] = ".-..";
    morseCharacter["M"] = "--";
    morseCharacter["N"] = "-.";
    morseCharacter["O"] = "---";
    morseCharacter["P"] = ".--.";
    morseCharacter["Q"] = "--.-";
    morseCharacter["R"] = ".-.";
    morseCharacter["S"] = "...";
    morseCharacter["T"] = "-";
    morseCharacter["U"] = "..-";
    morseCharacter["V"] = "...-";
    morseCharacter["W"] = ".--";
    morseCharacter["X"] = "-..-";
    morseCharacter["Y"] = "-.--";
    morseCharacter["Z"] = "--..";
    morseCharacter["1"] = ".----";
    morseCharacter["2"] = "..---";
    morseCharacter["3"] = "...--";
    morseCharacter["4"] = "....-";
    morseCharacter["5"] = ".....";
    morseCharacter["6"] = "-....";
    morseCharacter["7"] = "--...";
    morseCharacter["8"] = "---..";
    morseCharacter["9"] = "----.";
    morseCharacter["0"] = "-----";

    function privateMethod() {
        // ...
    }

    morseCode.Display = morseCharacter["0"];
    morseCode.moduleMethod = function () {
        // ...
    };

    return morseCode;
}());
