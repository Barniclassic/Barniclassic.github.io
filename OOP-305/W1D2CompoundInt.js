/* DEFINING TABLE
inputs: initial deposiit, annual interest rate, years 
outputs: total amount
process: 
- converting the inputs to numbers
- get the formula for coompund interest
- get the monthly interest rate by dividing annual interest rate by 12 months
- months of interest will be number of years * 12
*/
const MONTHLY = 12;
let amount, initial, interest, years;
function compoundInterest(initial, interest, years) {
    amount = initial * (1 + ((interest / 100) / MONTHLY)) ** (years * MONTHLY);
    return amount;
}
compoundInterest(initial, interest, years)
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
