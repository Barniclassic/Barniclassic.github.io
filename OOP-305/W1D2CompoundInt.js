"use strict";
/* DEFINING TABLE
inputs: initial deposiit, annual interest rate, years 
outputs: total amount
process: 
- converting the inputs to numbers
- get the formula for coompund interest
- get the monthly interest rate by dividing annual interest rate by 12 months
- months of interest will be number of years * 12
*/
/**
* @param {int} initial is a number input.
* @param {int} interest is percentage interest
* @param {int} years is number of years.
* @returns {double} total amount.
**/
function compoundInterest(initial, interest, years) {
  let amount = initial * Math.pow(1 + interest / 100 / 12, years * 12);
    return amount;
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
