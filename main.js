const textTextarea = document.getElementById("textTextarea");
const morseTextarea = document.getElementById("morseTextarea");

const changeMorseButton = document.getElementById("changeToMorse");
const changeTextButton = document.getElementById("changeToText");

changeMorseButton.addEventListener("click", () => {
  console.log("test: " + textTextarea.value);
  // console.log(changeTextToMorse(textTextarea.value));
  morseTextarea.value = changeTextToMorse(textTextarea.value);
  console.log("test999");
  // changeMorseToText("-/-,-,-,-");
  // changeTextToMorse(textTextarea.value);
});

changeTextButton.addEventListener("click", () => {
  console.log("test: " + morseTextarea.value);
  textTextarea.value = changeMorseToText(morseTextarea.value);
});

function changeTextToMorse(sentence) {
  sentenceArray = sentence.split("");
  console.log("array: " + sentenceArray);
  wasLastCharALetter = false; //allow commers only between words
  morseSentence = sentenceArray.reduce((sentence, letter) => {
    //add space
    if (letter === " ") {
      wasLastCharALetter = false;
      return sentence + "/";
    }
    console.log("word");
    letterIndex = textArray.findIndex((key) => key === letter.toUpperCase());
    //returns without a commer if the sentance doesn't end with a word
    if (wasLastCharALetter === false) {
      wasLastCharALetter = true;
      return sentence + morseArray[letterIndex];
    }
    wasLastCharALetter = true;
    return sentence + " " + morseArray[letterIndex];
  }, "");
  return morseSentence;
}

function changeMorseToText(sentence) {
  console.log("sentence");
  console.log(sentence);
  adjustedSentence = sentence.replaceAll("/", " (space) ");
  console.log(adjustedSentence);
  sentenceArray = adjustedSentence.split(" ");
  console.log("sentenceArray");
  console.log(sentenceArray);
  textSentence = sentenceArray.reduce((sentence, part) => {
    console.log("start");
    console.log(part);
    console.log(sentence);
    // add space
    if (part === "(space)") {
      return sentence + " ";
    }
    //stops morse ending with / counting it as invalid
    if (part === "") {
      return sentence;
    }

    morseIndex = morseArray.findIndex((value) => value === part);
    console.log(morseIndex);
    //returns without a commer if the sentance doesn't end with a word
    if (morseIndex === -1) {
      return sentence + "(invalid)";
    }
    return sentence + textArray[morseIndex];
  }, "");
  console.log("end");
  console.log(textSentence);
  return textSentence;
}

// an object that stores letter and their morse values as objects and keys so that they can be easily change and understood
TextMorseObject = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

textArray = Object.keys(TextMorseObject);
morseArray = Object.values(TextMorseObject);
