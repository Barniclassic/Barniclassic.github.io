"use strict";
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        // this._number = _number;
        this._interest = interest;
        // this.balance = 0.0;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    addInterest(){
       this._balance = this.getBalance() + this.getBalance() * (this._interest/100);
       return this._balance;
    }
    
    toString(){
        return "SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
      }
}




/* global exports */
// module.exports = {SavingsAccount};