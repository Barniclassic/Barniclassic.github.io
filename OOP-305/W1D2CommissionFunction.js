"use strict";
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
const assert = require("assert");
describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(salesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(salesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(salesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(salesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(salesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(salesCommission(false, 3500), 100);
    });
});
