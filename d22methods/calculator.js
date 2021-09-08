/* eslint-disable id-length */
"use strict";

const calculator = {
        a: 1,
        b: 1,
        sum() {},
        mul() {},
        setValues() {}
};
    calculator.sum = function () {
        return this.a + this.b;
    };

    calculator.mul = function() {
        return this.a * this.b;
    };

  calculator.setValues = function(number1, number2) {
    this.a = number1;
    this.b = number2;
  };

// console.log(calculator.sum());
// console.log(calculator.mul());


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
// module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests