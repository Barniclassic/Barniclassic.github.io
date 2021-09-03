/* eslint-disable no-redeclare */
"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
// module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {number} num any number.
 *@returns {number} double the input
 */
function double(num){
    return num*2;
}

/**
 * @param {number} num any number.
 * @returns {number} 100 times the input
 */
 function times100(num){
     return num*100;
 }

/**
 * @param {array} arr is an array;
 * @param {function} double is a function to be applied.
 * @returns {Array} creates a new array with function mapped to each element
 */
 function myMap(arr, double){
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr[i] = double(arr[i]);
    }
    return newArr;
}
/**
 * @param {array} arr is an array;
 * @param {function} times100 is a function to be applied.
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, times100){
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr[i] = times100(arr[i]);
    }
    return newArr;
}
/**
 * @param {array} arr is an array.
 * @param {number} num is any number.
 * @returns {number} creates a new array with function mapped to each element
 */
 myMap (function(num){return num*3;});
 (num) => { return num*3;};