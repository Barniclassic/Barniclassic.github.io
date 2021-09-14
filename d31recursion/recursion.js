/* eslint-disable require-jsdoc */
"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = { sumTo, factorial, fibonacci};// outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

function sumTo(num) {
    if (num === 1) {
        return 1;
    } else {
        return num + sumTo(num - 1);
    }
}

function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function fibonacci(num) {
    if (num === 0){
        return 0;
    }else if (num === 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}