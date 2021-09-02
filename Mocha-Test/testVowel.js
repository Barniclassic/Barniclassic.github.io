"use strict";
module.exports = { isVowel };
/** 
* @param {String} letter is any letter input.
* @returns {boolean} true if vowel, false if not vowel.
*/
function isVowel(letter) {
  if (letter === "a" || letter === "e" || letter === "i"
    || letter === "o" || letter === "u" || letter === "A" || letter === "E"
    || letter === "i" || letter === "I" || letter === "U") {
    return true;
  } else
    return false;
}