"use strict";
  module.exports = { compoundInterest };
 /** 
 * @param {int} initial is a number input.
 * @param {int} interest is percentage interest
 * @param {int} years is number of years.
 * @returns {int} total amount.
 */
const MONTHLY = 12;
function compoundInterest(initial, interest, years) {
    amount = initial * Math.pow(1 + (interest / 100) / MONTHLY), (years*MONTHLY));
    return amount;
}