let cost, payments;
function  calcDownpayment(cost){
    if (cost < 50000){
        payment = cost * (5/100);
        return payment;
    }else if (cost >= 50000 && cost < 100000){
        payment = 2500 + (cost-50000) * (10/100);
        return payment;
    }else if (cost >= 100000 && cost < 200000){
        payment = 7500 + (cost-100000) * (15/100);
        return payment;
    }else {
        payment = 5000 + (cost-200000) * (10/100);
        return payment;
    }

}
calcDownpayment(cost)
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 5000: ", calcDownpayment(200000));