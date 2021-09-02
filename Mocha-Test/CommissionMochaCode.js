"use strict";
module.exports = { salesCommission, compoundInterest };
/** 
* @param {Boolean} test is any letter input.
* @param {int} sales the anount for sales.
* @returns {int} it returns commission. 
*/
function salesCommission(test, sales) {
    let commission = 0;
    if (test === true) {
        if (sales > 500) {
            commission = (sales - 500) * 2 / 100 + 5;
        } else if (sales >= 300 && sales <= 500) {
            commission = sales * 1 / 100;
        }
    } else if (test === false) {
        if (sales > 500) {
            commission = ((sales - 500) * 3 / 100) + 10;
        } else if (sales >= 300 && sales <= 500) {
            commission = sales * 2 / 100;
        }
    }
    return commission;
}
/**
*@param {int} initial is a number input.
* @param {int} interest is percentage interest
* @param {int} years is number of years.
* @returns {double} total amount.
**/
function compoundInterest(initial, interest, years) {
    let amount = initial * Math.pow(1 + interest / 100 / 12, years * 12);
    return amount;
}