//Features of Morse Code Translator library
//1) Translate text to morse code and vice versa
//2) Convert morse code to sound and image
//3) Email message

/***********************************************
Goal of this library also allows me to practice: 
- Creating objects using different syntax allowed by the native JS language
- Creating properties using different syntax allowed by the native JS language
- Coding using only native JS code. All JS frameworks and libraries at minimum are built using native JS and/or jQuery library (which is written using native JS).

Reasons:
- Native JS is such a flexible and powerful (and misunderstood) language. Yet, OOPS purists want to slap on their bitch ass layer of TypeScript on top of native JS just so they can sleep better at night knowing they appeased the OOPS gods.
- I am rebel, so hear me roar!
- Relish the power of prototype flexibility not available in other OOP languages that utilize classes
**********************************************/

var MorseCode = (function () {
     var morseCode = {},
         morseCharacter = new Object();

     //The module pattern seals off these 'private' properties that can only be accessed below using a property created by the morseCode object
     //The only reason I made morseCharacter an object is in case I want to add rules to properties later otherwise primitive variables will do just fine here
     morseCharacter["A"] = ".-"; //The quotes "" make "A" a property for the private object morseCharacter, else it would be just an array
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
    
     //private method that can only be accessed within this module pattern
     function getMorseCodeFromKeyCode(kc) {
          //Execute code only within this sealed object
          //Translate the key code into morse code
          switch (kc) {
               case 65: //A
               case 97:	//a
                    return morseCharacter["A"];
                    break;
               case 66: //B
               case 98: //b
                    return morseCharacter["B"];
                    break;
/*
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
               case : //
               case : //
                    return morseCharacter[""];
                    break;
*/
               case 32: //space
                    return "&nbsp;&nbsp;";
                    break;
               default:
                    return "";
                    break;
          }
     }

     //Display is a 'public' property that gets its value from one of the private properties from the private morseCharacter object

     morseCode.Display = morseCharacter["0"];

     //public method that can be accessed by end developer
     morseCode.moduleMethod = function () {
          alert("test module method in action");
     };

     //Get the morse code value based on key pressed by user
     morseCode.getMorseCharacter = function(e) {
          //As of this writing in FF the keyCode property
          //does not work on the onkeypress event (will only return a zero).
          //Set mykeypressed for cross-browser compatibility
          var mykeypressed = e.which || e.keyDown;
          document.getElementById("output").innerHTML += getMorseCodeFromKeyCode(mykeypressed).toString();
          //Use this built-in function if you want to see the code translate back to a character or key String.fromCharCode(mykeypressed)

     };

     return morseCode;
}());
