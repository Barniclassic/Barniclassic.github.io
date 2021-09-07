/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";
// const num= 5;
// // eslint-disable-next-line require-jsdoc

// function mycube(num){
//     let cube = Math.pow(num, 3);
//     return cube;
// }
// function myCallback(mycube, num){
//      console.log(mycube(num));
// }
// myCallback(mycube,num);
// myCallback(function() {let cube = Math.pow(num, 3); return cube;});

// function funX(a, b) {
//     let c;
//     c = 5;
//     funY(a * c, "yes");
// }
// function funY(x, y) {
//     let z;
//     z = "I can see the sea";
//     console.log("What is on the stack here?");
// }
// function main() {
//     let a;
//     // eslint-disable-next-line id-length
//     let b;
//     a = "Hello";
//     funX(3, a);
//     b = "World";
// }
// main();

// function isStack(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         sum += i;
//         if (sum === num)
//             return true;
//     }
//     return false;
// }
// console.log(isStack(10));

// function isSumFirstLastodd(num) {
//     let sum = 0;
//     let temp = num;
//     let first = 0, last = 0;
//     for (let i = 10; i < temp; i*=10) {
//         if (i <= 10) {
//             last = num % 10;
//         }if (num >10 && num < 20 ){
//             first = parseInt(num/10);
//         }
//         num /= 10; 
//     }
//     sum = first + last;
//     console.log(sum);
//         if(sum%2 !== 0){
//             return true;
//         }else{
//             return false;
//         }
// }
// console.log(isSumFirstLastodd(12));

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.pop();
        arr.push(arr[i]);
        arr[i] = temp;
    }
    return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,5]));