/* eslint-disable require-jsdoc */
"use strict";
let scores = [];
let j = 0;
for (let i = 0; i<5; i++){
    j += 10;
    scores[i] =j;
}
console.log(scores);


// eslint-disable-next-line require-jsdoc
function findAverage(scores){
    let average = 0;
    let sum = 0;
    for (let i = 0; i<5; i++){
        sum += scores[i];
    }
    average = sum/scores.length;
    return average;
}
console.log("the scores average is ", findAverage(scores));

function randomAverage(randomScores){
    let average = 0;
    let sum = 0;
    for (let i = 0; i<10; i++){
        randomScores[i] = Math.ceil(Math.random()*10);
        sum += scores[i];
    }
    average = sum/scores.length;
    return average;
}
console.log("the random average is ", randomAverage(scores));

const exp1 = [ "{", "}", "{", "{", "}", "}" ];
const exp2 = [ "{", "{", "{", "{", "}", "}" ];
function checkBalance(exp1){
    const stack = [];
    for (let bracket of exp1){
        if(bracket === "{"){
            stack.push(bracket);
        }else{
            stack.pop();
        }
    }
        if (stack.length === 0){
            return true;
        }else 
            return false;
}
console.log(checkBalance(exp1));
console.log(checkBalance(exp2));

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
console.log(matrix);
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}
console.log(sum);
