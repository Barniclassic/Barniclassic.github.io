"use strict";
/* eslint-disable id-length */
/* eslint-disable require-jsdoc */


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

function filterRange(arr, a, b) {
  let newArr = arr.filter(item => item >= a && item <= b);
  return newArr;
}

let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
  let index = arr.length;
  for (let i = 0; i < index; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

function unique(arr) {
  let newArr = [];
  for (let words of arr) {
    let test = true;
    for (let string of newArr) {
      if (words === string) {
        test = false;
        break;
      }
    }
    if (test === true) {
      newArr.push(words);
    }
  }
  return newArr;
}


function groupById(array) {
  return array.reduce((obj, temp) => {
  obj[temp.id] = temp;
  return obj;
  }, {});
}