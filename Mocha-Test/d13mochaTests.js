"use strict";
const assert = require("assert");
/* import from functions.js module */
const functionsModule = require("./CommissionMochaCode.js");
const salesCommission = functionsModule.salesCommission;
const compoundInterest = functionsModule.compoundInterest;
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
describe("test of Compound Interest", function(){
    it("tests the total compound interest", function(){
    assert.strictEqual(compoundInterest(100, 10, 1), 110.47130674412968);
    });
    it("tests the total compound interest", function(){
    assert.strictEqual(compoundInterest(10000, 5, 10), 16470.0949769028);
    });
});