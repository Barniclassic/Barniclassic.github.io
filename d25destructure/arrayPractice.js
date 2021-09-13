"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
    return arr.map(num => num * 2);
}

function doubleAges(arr){
    return arr.map(item => {return {name:item.name, age:item.age*2}});
}
console.log(doubleAges(peopleArray));

function filterEven(arr){
   return arr.filter(item => item%2 ===0);
}

function filterOver10(arr) {
    return arr.filter(item => item.age>10);
}

function findEvenNum(arr){
    return arr.find(item => item%2 ==0);
}

function findEvenAge(arr){
    return arr.find(item => item.age%2 ==0);
}

function includesEvenNum(arr){
    for(let num of arr){
        if(num%2 === 0){
         return true;
        }
    }
    return false;
}

function includesEvenAge(arr){
    for(let num of arr){
        if(num.age%2 === 0){
         return true;
        }
    }
    return false;
}