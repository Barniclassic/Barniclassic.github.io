"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { topSalary}, getDateAgo }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {
    let maxSal =0;
    let maxSalName = null;
    for(const [name, sal] of Object.entries(salaries)) {
        if(salaries === {}) {
            return null;
        }else
        if(maxSal < sal) {
            maxSal = sal;
            maxSalName = name;
        }
    }
      return maxSalName;  
}


// function getDateAgo(date, days) {

// }