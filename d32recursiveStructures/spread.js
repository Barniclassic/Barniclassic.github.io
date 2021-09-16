/* eslint-disable require-jsdoc */
"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests



function copyArray(arr){
    let copyArr = [...arr];
    return copyArr;
}

function concat(arr1, arr2){
    let con = arr1.concat(arr2);
    return con;
}

function findMin(...numbers) {
    let min = Infinity;
    for(let i=0; i<numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
    }
    return min;
}

function combineObjs(obj1, obj2){
    const newObj = {...obj1, ...obj2};
    return newObj;
}