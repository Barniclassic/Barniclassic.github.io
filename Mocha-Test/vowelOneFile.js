"use strict";
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
const assert = require("assert");
describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});
