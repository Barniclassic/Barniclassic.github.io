"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { ucFirst, checkSpam, getMaxSubSum, truncate , camelize, extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {string} str  takes a string
 * @returns {string} returns string
 */
function ucFirst(str) {
    let cut = str.substring(1);
    str = str.charAt(0).toUpperCase();
    str += cut;
    return str;
}
/**
 * 
 * @param {string} str  takes a string
 * @returns {boolean} returns a boolean
 */
function checkSpam(str) {
  let arr = ["viagra", "xxx", "sex"];
  for (let word of arr){
      if(str.toLowerCase().includes(word.toLowerCase())){
          return true;
      }
  }
  return false;
}

/**
 * 
 * @param {string} str  takes a string
 * @param {number} maxlength takes a number
 * @returns {string} returns string
 */
function truncate(str, maxlength) {
      if(str.length > maxlength){
        str = str.substring(0, maxlength-1) + "…";
      }else
        str = str.substring(0, maxlength);
      return str;
  }

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    for(let i=0; i<arr.length; i++){
        let tempSum = 0;
        for(let j=i; j<arr.length; j++){
            tempSum += arr[j];
            maxSum = Math.max(maxSum, tempSum);
        }
    }
    return maxSum;
}
/**
 * 
 * @param {string} str  takes a string
 * @returns {string} returns a string
 */
function camelize(str) {
    let arr = str.split("-");
    let ele = "";
    for (let i=1; i<arr.length; i++){
        ele += arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
    }
    return arr[0] + ele;
}
/**
 * 
 * @param {string} str  takes a string
 * @returns {number} returns a number
 */
function extractCurrencyValue(str){
    return parseInt(str.substring(1));
}
