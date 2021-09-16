/* eslint-disable require-jsdoc */
"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

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

function outputList(input){
    if(input.next === null){
        return input.value + " printed to console";
    }else 
        return input.value + " " + outputList(input.next);
}

function outputListLoop(input){
    let str = "";
    while(input.next !== null){
        str += input.value + " ";
        input = input.next;
    } 
        str += input.value + " printed to console";
        return str;
}

function reverseList(input){
    if(input.next === null){
        return input.value;
    }else 
        return reverseList(input.next) + " " + input.value;
}


function reverseListLoop(input){
    let str = "";
    while(input.next !== null){
        str = input.value + " " + str;
        input = input.next;
    } 
        str = input.value + " " + str + "printed to console";
        return str;
}