"use strict";
const assert = require("assert");
/* import from functions.js module */
const functionsModule = require("./mycode.js");
const checkPrime = functionsModule.checkPrime;
describe("checkPrime returns true if argument is prime ", function () {
    it("7 is prime", function () {
        assert.strictEqual(checkPrime(7), true);
    });
    it(" 8 is not prime", function () {
        assert.strictEqual(checkPrime(8), false);
    });
});
