"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr is an array input.
 * @returns {Array} copy of the original array.
 */
function copyArray(arr){
    let copyArr = [...arr];
    return copyArr;
}

/**
 * 
 * @param {Array} arr1 is an array input.
 * @param {Array} arr2 is an array input.
 * @returns {Array} the combined array of the inputs.
 */
function concat(arr1, arr2){
    let con = arr1.concat(arr2);
    return con;
}

/**
 * 
 * @param  {...any} numbers is an argument input.
 * @returns {number} the minimum value from the argument.
 */
function findMin(...numbers) {
    let min = Infinity;
    for(let i=0; i<numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
    }
    return min;
}

/**
 * 
 * @param {Object} obj1 is an object input.
 * @param {Object} obj2 is an object input.
 * @returns {Object} is a new object which is created after the combination of the object inputs. 
 */
function combineObjs(obj1, obj2){
    const newObj = {...obj1, ...obj2};
    return newObj;
}