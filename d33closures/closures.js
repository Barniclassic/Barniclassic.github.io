/* eslint-disable id-length */
/* eslint-disable valid-jsdoc */
"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
    return function (num) {
        for (let value of arr) {
            if (value === num) {
                return true;
            }
        }
        return false;
    }
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
    return function (number) {
        if (number >= low && number <= high) {
            return true;
        } else {
            return false;
        }
    };

}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName) {
    return function (a, b) {
        if (a[fieldName] > b[fieldName]) {
            return 1;
        } else{
            return -1;
        }
    }
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
    let arr = [];
        for(let i=0; i<10; i++) {
            let array = function (){
                return i;
            };
            arr.push(array);
        }

    return arr;
}
