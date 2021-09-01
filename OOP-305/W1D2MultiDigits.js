let input;
function sumDigits(input) {
    let sum = 0;
    while (input > 0) {
        sum += input % 10;
        input = parseInt(input / 10);
    }
    return sum;
}
sumDigits(input)
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));

function multDigits(input) {
    let product = 1;
    while (input > 0) {
        product *= input % 10;
        input = parseInt(input / 10);
    }
    return product;
}
multDigits(input)
console.log(multDigits(1234));
console.log(multDigits(102));
console.log(multDigits(8));
