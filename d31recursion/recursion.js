"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num is any number. 
 * @returns {number} the total sum of the input.
 */
function sumTo(num) {
    if (num === 1) {
        return 1;
    } else {
        return num + sumTo(num - 1);
    }
}

/**
 * 
 * @param {number} num is any number. 
 * @returns {number} the factorial of the input.
 */
function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

/**
 * 
 * @param {number} num is any number. 
 * @returns {number} the factorial of the input.
 */
function fibonacci(num) {
    if (num === 0){
        return 0;
    }else if (num === 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

/**
 * 
 * @param {node} input is a node.
 * @returns{String} the concated value of the node.
 */
function outputList(input){
    if(input.next === null){
        return input.value + " printed to console";
    }else 
        return input.value + " " + outputList(input.next);
}

/**
 * 
 * @param {node} input is a node.
 * @returns{String} the concated value of the node.
 */
function outputListLoop(input){
    let str = "";
    while(input.next !== null){
        str += input.value + " ";
        input = input.next;
    } 
        str += input.value + " printed to console";
        return str;
}

/**
 * 
 * @param {node} input is a node.
 * @returns{String} the reversed concated value of the node.
 */
function reverseList(input){
    if(input.next === null){
        return input.value;
    }else 
        return reverseList(input.next) + " " + input.value;
}

/**
 * 
 * @param {node} input is a node.
 * @returns{String} the reversed concated value of the node.
 */
function reverseListLoop(input){
    let str = "";
    while(input.next !== null){
        str = input.value + " " + str;
        input = input.next;
    } 
        str = input.value + " " + str + "printed to console";
        return str;
}