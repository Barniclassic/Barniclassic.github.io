    "use strict";
    const assert = require("assert");
    const methods = require("./combinedCodes.js");
    const calcDownpayment = methods.calcDownpayment;
    const convertFahrenheit = methods.convertFahrenheit;
    const calcDistance = methods.calcDistance;
    const sumDigits = methods.sumDigits;
    const multDigits = methods.multDigits;
    describe("computeDownPayment", function () {
        it("tests 40000 cost", function () {
            assert.strictEqual(calcDownpayment(40000), 2000);
        });
        it("tests 50000 cost", function () {
            assert.strictEqual(calcDownpayment(50000), 2500);
        });
        it("tests 100000 cost", function () {
            assert.strictEqual(calcDownpayment(100000), 7500);
        });
        it("tests 200000 cost", function () {
            assert.strictEqual(calcDownpayment(200000), 5000);
        });
    });

    describe("convertFahrenheit", function () {
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(32), 0);
        });
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(0), -17.77777777777778);
        });
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(212), 100);
        });
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(100), 37.77777777777778);
        });
    });

    describe("calcDistance", function () {
        it("calcDistance", function () {
            assert.strictEqual(calcDistance(0, 0, 5, 5), 7.0710678118654755);
        });
    });

    describe("the sum digit", function () {
        it("sumDigits", function () {
            assert.strictEqual(sumDigits(1234), 10);
        });
        it("sumDigits", function () {
            assert.strictEqual(sumDigits(102), 3);
        });
        it("sumDigits", function () {
            assert.strictEqual(sumDigits(8), 8);
        });
    });

    describe("the multiplication digit", function () {
        it("multDigits", function () {
            assert.strictEqual(multDigits(1234), 24);
        });
        it("multDigits", function () {
            assert.strictEqual(multDigits(102), 0);
        });
        it("multDigits", function () {
            assert.strictEqual(multDigits(8), 8);
        });
    });