let sales, commission = 0, test;
function computeSalesCommission(test, sales) {
    if (test === true) {
        if (sales > 500) {
            commission = (sales - 500) * 2 / 100 + 5;
        } else if (sales >= 300 && sales <= 500) {
            commission = sales * 1 / 100
        }
    } else if (test === false) {
        if (sales > 500) {
            commission = ((sales - 500) * 3 / 100) + 10;
        } else if (sales >= 300 && sales <= 500) {
            commission = sales * 2 / 100
        }
    }
    return commission;
}
computeSalesCommission(test, sales)
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));
