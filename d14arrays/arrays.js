"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
// module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArrayInPlace, reverseArray,scoreExams, generateArray }; 
//add all of your function names here that you need for the node mocha tests

/**
 * @param {number} num1 is a number
 * @param {number} num2 is a number 
 * @param {number} num3 is a number
 * @returns {number} largest all the numbers.
 */
function maxOfThree(num1, num2, num3) {
    let max = num1;
    if (max < num2) {
        max = num2;
    } if (max < num3) {
        max = num3;
    }
    return max;
}

/**
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}

/**
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (const number of arr) {
        tot *= number;
    }
    return tot;
}
/**
 * 
 * @param {Array} arr of numbers 
 * @returns {number} the longest word.
 */
function findLongestWord(arr) {
    let longLength = 0;
    for (let word of arr) {
        if (word.length > longLength) {
            longLength = word.length;
        }
    }
    return longLength;
}
/**
 * @param {Array} arr of numbers and letters.
 * @returns {number} the array reverse.
 */
function reverseArrayInPlace(arr) {
    let temp;
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp = arr[i];
        arr[i] = arr[count];
        arr[count] = temp;
        if (count === i && arr.length % 2 !== 0 || count + 1 === i && arr.length % 2 === 0) {
            break;
        }
        count++;
    }
    return arr;
}

/**
 * @param {Array} arr of numbers and letters.
 * @returns {number} the array reverse.
 */
function reverseArray(arr) {
    const arr2 = [];
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2[count] = arr[i];
        count++;
    }
    return arr2;
}
/**
 * 
 * @param {array} studentAnswers is students answers.
 * @param {array} correctAnswers is the correct answers.
 * @returns {array} scores for students answers.
 */
function scoreExams(studentAnswers, correctAnswers) {
    let report = [];
    for (let i = 0; i < studentAnswers.length; i++) {
        let count = 0;
        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (correctAnswers[j] === studentAnswers[i][j]) {
                count++;
            }
        }
        report[i] = count;
    }
    return report;
}
/**
 * 
 * @param {number} num1 random numbers;;
 * @param {number} num2 random numbers;
 * @returns {array} a 2-dimensional array containing
sequential numbers across each row
 */
 function generateArray(num1, num2){
    let matrix = [];
    let count = 1;
    for(let i=0; i<num1; i++){
         let arr= [];
        for(let j=0; j<num2; j++){
            arr[j] = count;
            count++;
        }
        matrix[i] = arr;
    }
    return matrix;
}
