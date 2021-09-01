/* DEFINING TABLE
input: cost of the house 
output: total down payment amount
process: 
- find the actual bracket for down payment percentage
- multiply the cost of the house by the percentage plus some additional fees depending on the cost
*/
let cost, payments;
function calcDownpayment(cost) {
    if (cost < 50000) {
        payment = cost * (5 / 100);
    } else if (cost >= 50000 && cost < 100000) {
        payment = 2500 + (cost - 50000) * (10 / 100);
    } else if (cost >= 100000 && cost < 200000) {
        payment = 7500 + (cost - 100000) * (15 / 100);
    } else {
        payment = 5000 + (cost - 200000) * (10 / 100);
    }
    return payment;
}
calcDownpayment(cost)
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 5000: ", calcDownpayment(200000));
