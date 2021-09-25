/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
"use strict";

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        // this._number = _number;
        this.overdraft = overdraft;
        // this.balance = 0.0;
    }

    getOverdraft() {
        return this.overdraft;
    }

    setOverdraft(overdraft) {
        this.overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this.overdraft) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this.overdraft;
    }

    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance " + "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this.overdraft;
        }else
            return "";


    }

}




/* global exports */
// module.exports = { CheckingAccount };